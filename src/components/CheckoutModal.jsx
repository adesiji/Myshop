export default function CheckoutModal({
  isOpen,
  cart,
  total,
  onRemoveItem,
  onClose,
}) {
  return (
    <div id="checkout" className={`checkout hidden${isOpen ? " show" : ""}`}>
      <div className="checkout-content">
        <h2>Checkout</h2>
        <div id="checkout-items">
          {cart.length === 0 ? (
            <p>Your cart is empty! 🛒</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div className="checkout-item" key={`${item.name}-${index}`}>
                  <p>
                    {item.name} - ${item.price.toFixed(2)}
                  </p>
                  <button
                    className="remove-item"
                    onClick={() => onRemoveItem(index)}
                  >
                    Remove ❌
                  </button>
                </div>
              ))}
              <hr />
              <h3>Total: ${total.toFixed(2)}</h3>
            </>
          )}
        </div>
        <button id="closeCheckout" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
