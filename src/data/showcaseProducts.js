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
    gallery: ["1.png", "2.png", "3.jpg", "4.jpg", "5.jpg", "6.jpg"].map((f) =>
      productImg("ultra-sonic-humidifier", f),
    ),
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
    cover: productImg("high-pressure-micro-mist-humidifier", "1.jpeg"),
    gallery: ["1.jpeg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"].map((f) =>
      productImg("high-pressure-micro-mist-humidifier", f),
    ),
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
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "16.jpg",
    ].map((f) => productImg("accessoirs", f)),
    specs: ["OEM-compatible parts", "Quick-swap nozzle heads", "Stainless steel options", "Full system kits available"],
  },
];
