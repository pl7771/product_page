const ARTICLE_IMAGE_MAX_WIDTH = 1440;
const DEFAULT_QUALITY = 0.82;

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

  let dataUrl = canvas.toDataURL('image/jpeg', quality);

  if (dataUrl.length > 1_200_000) {
    dataUrl = canvas.toDataURL('image/jpeg', 0.72);
  }

  return dataUrl;
};
