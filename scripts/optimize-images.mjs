import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA_DIR = path.join(ROOT, 'public', 'data');
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png']);

function maxWidthFor(relPath) {
  const p = relPath.replace(/\\/g, '/');
  if (p.includes('/qr/')) return 320;
  if (p.includes('/products/')) return 960;
  return 1440;
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

async function optimize(filePath) {
  const rel = path.relative(DATA_DIR, filePath);
  const maxW = maxWidthFor(rel);
  const ext = path.extname(filePath).toLowerCase();
  const webpPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');
  const tmpPath = `${filePath}.opt.tmp`;

  const before = await stat(filePath);
  const input = sharp(filePath).rotate();
  const meta = await input.metadata();

  let resized = input;
  if (meta.width > maxW) {
    resized = input.resize(maxW, null, { withoutEnlargement: true, fit: 'inside' });
  }

  if (ext === '.png') {
    await resized
      .clone()
      .png({ compressionLevel: 9, palette: meta.hasAlpha ? false : true })
      .toFile(tmpPath);
  } else {
    await resized.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(tmpPath);
  }

  await resized.clone().webp({ quality: 82, effort: 4 }).toFile(webpPath);

  await unlink(filePath);
  await rename(tmpPath, filePath);

  const after = await stat(filePath);
  const webpSize = (await stat(webpPath)).size;
  const saved = Math.round((1 - after.size / before.size) * 100);

  console.log(
    `✓ ${rel}  ${Math.round(before.size / 1024)}KB → ${Math.round(after.size / 1024)}KB (-${saved}%) + webp ${Math.round(webpSize / 1024)}KB`,
  );

  return { before: before.size, after: after.size, webp: webpSize };
}

async function main() {
  const files = await walk(DATA_DIR);
  console.log(`Optimizing ${files.length} images in public/data …\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  let totalWebp = 0;

  for (const file of files) {
    try {
      const result = await optimize(file);
      totalBefore += result.before;
      totalAfter += result.after;
      totalWebp += result.webp;
    } catch (err) {
      console.error(`✗ ${path.relative(DATA_DIR, file)}: ${err.message}`);
    }
  }

  console.log(
    `\nDone. Originals: ${Math.round(totalBefore / 1024 / 1024)}MB → ${Math.round(totalAfter / 1024 / 1024)}MB | WebP total: ${Math.round(totalWebp / 1024 / 1024)}MB`,
  );
}

main();
