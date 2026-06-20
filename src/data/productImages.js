const productImg = (folder, filename) =>
  `/data/products/${folder}/${encodeURIComponent(filename)}`;

export const productGalleryPaths = {
  ultrasonic: [
    '1.png',
    '2.png',
    'C400-1-C800-2.jpg',
    'C1200-3-C1600-4.jpg',
    'C2000-5-C2400-6.jpg',
    'IMG_20200707_152826.jpg',
    'IMG_20200707_152835.jpg',
    'IMG_20200707_152839.jpg',
    'IMG_20200707_153029.jpg',
  ].map((f) => productImg('ultra-sonic-humidifier', f)),
  highPressure: [
    '2K_202606061722.jpeg',
    '4.jpg',
    '1 (4)P.jpg',
    '0e812ddddf84ff6e51637ff90b57ad9.jpg',
    'fe1b77d474e98867994c318022bef652.jpg',
  ].map((f) => productImg('high-pressure-micro-mist-humidifier', f)),
  accessories: [
    '1.jpeg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '1 (4).jpg',
    '1 (7).jpg',
    '1 (8).jpg',
    '1 (9).jpg',
    '1 (10).jpg',
    '1 (11).jpg',
    '1 (12).jpg',
  ].map((f) => productImg('accessoirs', f)),
};
