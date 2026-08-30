export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img
        src={`${import.meta.env.BASE_URL}images/${product.image}`}
        alt={product.cartName}
      />
      <h3>{product.title}</h3>
      <p className="price">{product.displayPrice}</p>
      <button
        className="add-to-cart"
        onClick={() => onAddToCart(product.cartName, product.price)}
      >
        Add to Cart
      </button>
    </div>
  );
}
