// Product catalog for MyShop.
//
// Notes preserved from the original HTML on purpose (not "fixed"):
// - `cartName` is what was in the original `data-name` attribute (used for
//   cart entries). `title` is the text that was actually shown in the <h3>,
//   which for two products (jacket, car charger) differs from `cartName`.
// - `price` is the numeric value from `data-price` (what gets added to the
//   cart total). `displayPrice` is the string that was shown on the card.
//   For the ASUS Vivobook these don't match in the original markup
//   (data-price="29.99" but the card showed "$279.00") — that mismatch is
//   preserved here rather than silently "corrected".
export const products = [
  {
    id: "duracell-plus-aa",
    cartName: "Duracell Plus AA Batteries (24 Pack)",
    title: "Duracell Plus AA Batteries (24 Pack)",
    price: 14.99,
    displayPrice: "$14.99",
    image: "71bUiEwLZoL._AC_SX522_.jpg",
  },
  {
    id: "iphone-xr-renewed",
    cartName: "Apple iPhone XR, 64GB,RED (Renewed)",
    title: "Apple iPhone XR, 64GB,RED (Renewed)",
    price: 139.99,
    displayPrice: "$139.99",
    image: "518Cj2o6qsL._AC_SX679_.jpg",
  },
  {
    id: "steel-blade-clipper",
    cartName: "Steel Blade Clipper",
    title: "Steel Blade Clipper",
    price: 24.99,
    displayPrice: "$24.99",
    image: "71buW+kRQpL._AC_SX679_.jpg",
  },
  {
    id: "keplin-coat-hangers",
    cartName: "KEPLIN Adult Plastic Coat Hangers",
    title: "KEPLIN Adult Plastic Coat Hangers",
    price: 5.99,
    displayPrice: "$5.99",
    image: "71wU7MSPFSL._AC_SX679_.jpg",
  },
  {
    id: "watering-can",
    cartName: "Strong Green 6.5L Litre Watering Can",
    title: "Strong Green 6.5L Litre Watering Can",
    price: 8.99,
    displayPrice: "$8.99",
    image: "510CrzCRuBL._AC_SX522_.jpg",
  },
  {
    id: "paper-craft-punch",
    cartName: "Paper Craft Punch",
    title: "Paper Craft Punch",
    price: 15.83,
    displayPrice: "$15.83",
    image: "51tOoAVFCiL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    id: "philips-handheld-steamer",
    cartName: "Philips 3000 Series Handheld Steamer",
    title: "Philips 3000 Series Handheld Steamer",
    price: 26.6,
    displayPrice: "$26.60",
    image: "61UatHaX5qL._AC_SX679_.jpg",
  },
  {
    id: "benriner-mandolin-slicer",
    cartName: "Benriner BN64B Mandolin Vegetable Slicer, ABS Plastic",
    title: "Benriner BN64B Mandolin Vegetable Slicer, ABS Plastic",
    price: 43.95,
    displayPrice: "$43.95",
    image: "71CdBZtwkGL.__AC_SY300_SX300_QL70_ML2_.jpg",
  },
  {
    id: "asus-vivobook15",
    cartName:
      "ASUS Vivobook15 Laptop(AMDRyzen 3-7320U, 8GB RAM, 512GB SSD)",
    title: "ASUS Vivobook15 Laptop(AMDRyzen 3-7320U, 8GB RAM, 512GB SSD)",
    price: 29.99,
    displayPrice: "$279.00",
    image: "51rcFQK1w5L._AC_SX679_.jpg",
  },
  {
    id: "wenger-skyon-luggage",
    cartName: "Wenger Skyon Luggage with Wheels, 2-teiliges Set",
    title: "Wenger Skyon Luggage with Wheels, 2-teiliges Set",
    price: 135.0,
    displayPrice: "$135.00",
    image: "51KpXDBGmQL._AC_UF480,480_SR480,480_.jpg",
  },
  {
    id: "conux-gaming-headset",
    cartName: "CONUX Gaming Headset Microphone PC/PS5/PS4/ Xbox",
    title: "CONUX Gaming Headset Microphone PC/PS5/PS4/ Xbox",
    price: 27.93,
    displayPrice: "$27.93",
    image: "gaming headset.jpg",
  },
  {
    id: "stormtrooper-helmet",
    cartName: "Star Wars Imperial Stormtrooper Helmet",
    title: "Star Wars Imperial Stormtrooper Helmet",
    price: 87.99,
    displayPrice: "$87.99",
    image: "star wars helment.jpg",
  },
  {
    id: "ps5-pro",
    cartName: "PlayStation 5 Pro",
    title: "PlayStation 5 Pro",
    price: 619.2,
    displayPrice: "$619.20",
    image: "playstation pro.jpg",
  },
  {
    id: "sekonda-quartz-watch",
    cartName: "Sekonda Quartz Watch",
    title: "Sekonda Quartz Watch",
    price: 39.5,
    displayPrice: "$39.50",
    image: "watch.jpg",
  },
  {
    id: "softshell-jacket-cargo-pants",
    cartName:
      "Men's Multi-Pocket Softshell Jacket & Regular Fit Cargo Pants",
    title: "Softshell Jacket & Cargo Pants",
    price: 57.85,
    displayPrice: "$57.85",
    image: "jack cloth.jpg",
  },
  {
    id: "lunch-bag",
    cartName: "A bi-layered multi-purpose lunch bag",
    title: "A bi-layered multi-purpose lunch bag",
    price: 25.11,
    displayPrice: "$25.11",
    image: "lunch box.jpg",
  },
  {
    id: "car-battery-charger",
    cartName: "Smart 12V Car Battery Charger & Maintainer",
    title: "Smart 12V Car Battery Charger & Maintainer, LCD Display",
    price: 19.26,
    displayPrice: "$19.26",
    image: "car battery charger.jpg",
  },
  {
    id: "soccer-shoes",
    cartName: "Professional Color Changing Soccer Shoes",
    title: "Professional Color Changing Soccer Shoes",
    price: 21.76,
    displayPrice: "$21.76",
    image: "soccer boot.jpg",
  },
];
