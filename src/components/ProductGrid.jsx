import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ onAddToCart }) {
  return (
    <main className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </main>
  );
}
