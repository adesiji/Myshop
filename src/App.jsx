import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import CheckoutModal from "./components/CheckoutModal";
import SupportModal from "./components/SupportModal";
import Footer from "./components/Footer";
import { useCart } from "./hooks/useCart";
import "./styles/style.css";

export default function App() {
  const { cart, addToCart, removeFromCart, total } = useCart();
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);
  const [isSupportOpen, setSupportOpen] = useState(false);

  return (
    <>
      <Navbar
        cartCount={cart.length}
        onCartClick={() => setCheckoutOpen(true)}
        onSupportClick={() => setSupportOpen(true)}
      />

      <ProductGrid onAddToCart={addToCart} />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        cart={cart}
        total={total}
        onRemoveItem={removeFromCart}
        onClose={() => setCheckoutOpen(false)}
      />

      <SupportModal
        isOpen={isSupportOpen}
        onClose={() => setSupportOpen(false)}
      />

      <Footer />
    </>
  );
}
