// src/data/showcaseProducts.js
const productImg = (folder, filename) =>
  `/data/products/${folder}/${encodeURIComponent(filename)}`;

export const showcaseProducts = [
  {
    id: 101,
    name: "Ultrasonic Humidifier",
    subtitle: "Ultrasonic Cold Mist System",
    description:
      "Generates ultra-fine 1–5 micron cold mist for precise humidity control in greenhouses, laboratories, and enclosed industrial spaces.",
    price: "Request Quote",
    category: "Humidification",
    cover: productImg("ultra-sonic-humidifier", "1.png"),
    gallery: [
      "1.png",
      "2.png",
      "C400-1-C800-2.jpg",
      "C1200-3-C1600-4.jpg",
      "C2000-5-C2400-6.jpg",
      "IMG_20200707_152826.jpg",
      "IMG_20200707_152835.jpg",
      "IMG_20200707_152839.jpg",
      "IMG_20200707_153029.jpg",
    ].map((f) => productImg("ultra-sonic-humidifier", f)),
    specs: ["Models: C400 – C2400", "1–5 μm droplet size", "Low energy consumption", "Silent operation"],
  },
  {
    id: 102,
    name: "High Pressure Micro Mist Humidifier",
    subtitle: "Industrial Atomization System",
    description:
      "High-pressure micron-level atomization for dust suppression, cooling, and large-scale humidification in demanding industrial environments.",
    price: "Request Quote",
    category: "Atomization",
    cover: productImg("high-pressure-micro-mist-humidifier", "2K_202606061722.jpeg"),
    gallery: [
      "2K_202606061722.jpeg",
      "4.jpg",
      "1 (4)P.jpg",
      "0e812ddddf84ff6e51637ff90b57ad9.jpg",
      "fe1b77d474e98867994c318022bef652.jpg",
    ].map((f) => productImg("high-pressure-micro-mist-humidifier", f)),
    specs: ["High-pressure pump system", "Adjustable flow rate", "Corrosion-resistant nozzles", "Automated control ready"],
  },
  {
    id: 103,
    name: "Accessories & Components",
    subtitle: "System Parts & Spares",
    description:
      "Nozzles, fittings, pumps, and control modules — precision components engineered for seamless integration with Aether mist systems.",
    price: "Request Quote",
    category: "Accessories",
    cover: productImg("accessoirs", "1.jpeg"),
    gallery: [
      "1.jpeg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "1 (4).jpg",
      "1 (7).jpg",
      "1 (8).jpg",
      "1 (9).jpg",
      "1 (10).jpg",
      "1 (11).jpg",
      "1 (12).jpg",
    ].map((f) => productImg("accessoirs", f)),
    specs: ["OEM-compatible parts", "Quick-swap nozzle heads", "Stainless steel options", "Full system kits available"],
  },
];
