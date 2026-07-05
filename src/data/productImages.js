const productImg = (folder, filename) =>
  `/data/products/${folder}/${encodeURIComponent(filename)}`;

export const productGalleryPaths = {
  ultrasonic: ['1.png', '2.png', '3.jpg', '4.jpg', '5.jpg', '6.jpg'].map((f) =>
    productImg('ultra-sonic-humidifier', f),
  ),
  highPressure: ['1.jpeg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'].map((f) =>
    productImg('high-pressure-micro-mist-humidifier', f),
  ),
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
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
  ].map((f) => productImg('accessoirs', f)),
};
