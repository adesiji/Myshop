import { useEffect, useState } from "react";

const STORAGE_KEY = "cart";

function readInitialCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

// Mirrors the original vanilla-JS cart behavior:
// - cart is an array of { name, price }
// - persisted to localStorage under the "cart" key on every change
// - adding an item shows a browser alert, same as before
export function useCart() {
  const [cart, setCart] = useState(readInitialCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  function addToCart(name, price) {
    setCart((prev) => [...prev, { name, price }]);
    window.alert(`${name} added to cart!`);
  }

  function removeFromCart(index) {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return { cart, addToCart, removeFromCart, total };
}
