import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Lives under data/, which the deploy rsync excludes, so uploads survive deploys.
// In production nginx serves this directory directly at /uploads/.
export const UPLOADS_DIR = path.join(__dirname, 'data', 'uploads');
export const UPLOADS_URL_PREFIX = '/uploads/';

const SIGNATURES = [
  { ext: 'jpg', mime: 'image/jpeg', test: (b) => b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff },
  {
    ext: 'png',
    mime: 'image/png',
    test: (b) => b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])),
  },
  {
    ext: 'webp',
    mime: 'image/webp',
    test: (b) => b.subarray(0, 4).toString('ascii') === 'RIFF' && b.subarray(8, 12).toString('ascii') === 'WEBP',
  },
];

export const UPLOAD_MIME_TYPES = SIGNATURES.map((s) => s.mime);

/** Detect the image type from its bytes; the declared Content-Type is not trusted. */
export const detectImageType = (buffer) =>
  buffer.length >= 12 ? SIGNATURES.find((s) => s.test(buffer)) ?? null : null;

/**
 * Store image bytes under a content-hash name and return the public URL.
 * The same image saved twice maps to the same file. Modes are set explicitly
 * because root's umask on the server (027) would hide the files from nginx.
 */
export const saveImage = (buffer) => {
  const type = detectImageType(buffer);
  if (!type) return null;

  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  fs.chmodSync(UPLOADS_DIR, 0o755);

  const hash = crypto.createHash('sha256').update(buffer).digest('hex').slice(0, 20);
  const name = `${hash}.${type.ext}`;
  const filePath = path.join(UPLOADS_DIR, name);

  if (!fs.existsSync(filePath)) {
    const tmpPath = `${filePath}.${process.pid}.tmp`;
    fs.writeFileSync(tmpPath, buffer);
    fs.chmodSync(tmpPath, 0o644);
    fs.renameSync(tmpPath, filePath);
  }

  return `${UPLOADS_URL_PREFIX}${name}`;
};

const DATA_URL_RE = /^data:image\/[a-z+.-]+;base64,/i;

/** Decode an inline data: image and store it; returns the URL, or null if not an image. */
export const saveDataUrlImage = (dataUrl) => {
  if (typeof dataUrl !== 'string' || !DATA_URL_RE.test(dataUrl)) return null;
  const buffer = Buffer.from(dataUrl.slice(dataUrl.indexOf(',') + 1), 'base64');
  return saveImage(buffer);
};

/**
 * Move inline data: images out of an article's language versions into files.
 * Returns the article (a new object only if something changed) and the count.
 */
export const extractInlineImages = (article) => {
  let changed = 0;
  const next = { ...article };
  for (const lang of ['en', 'zh']) {
    const image = article[lang]?.image;
    const url = saveDataUrlImage(image);
    if (url) {
      next[lang] = { ...article[lang], image: url };
      changed += 1;
    }
  }
  return { article: changed ? next : article, changed };
};
