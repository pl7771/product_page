const ARTICLE_IMAGE_MAX_WIDTH = 1440;
const DEFAULT_QUALITY = 0.82;

const MAX_OUTPUT_BYTES = 900_000;

const canvasToJpeg = (canvas, quality) =>
  new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('encode_failed'))),
      'image/jpeg',
      quality,
    );
  });

const loadImage = (file) =>
  new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('image_load_failed'));
    };
    image.src = url;
  });

/** Resize and re-encode a picked image as a JPEG Blob ready for upload. */
export const optimizeArticleImage = async (
  file,
  { maxWidth = ARTICLE_IMAGE_MAX_WIDTH, quality = DEFAULT_QUALITY } = {},
) => {
  const image = await loadImage(file);
  const scale = Math.min(1, maxWidth / image.width);
  const width = Math.max(1, Math.round(image.width * scale));
  const height = Math.max(1, Math.round(image.height * scale));

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('canvas_unavailable');

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(image, 0, 0, width, height);

  const blob = await canvasToJpeg(canvas, quality);
  return blob.size > MAX_OUTPUT_BYTES ? canvasToJpeg(canvas, 0.72) : blob;
};
