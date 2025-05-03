// Cart Array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Elements
const cartLink = document.getElementById("cart-link");
const cartCount = document.getElementById("cart-count");
const checkout = document.getElementById("checkout");
const checkoutItems = document.getElementById("checkout-items");
const closeCheckout = document.getElementById("closeCheckout");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

const supportLink = document.getElementById("support-link");
const supportModal = document.getElementById("support-modal");
const closeSupport = document.getElementById("close-support");

// Initialize
updateCartCount();

// Handle "Add to Cart"
addToCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const productCard = e.target.parentElement;
    const name = productCard.getAttribute("data-name");
    const price = parseFloat(productCard.getAttribute("data-price"));

    cart.push({ name, price });
    saveCart();
    updateCartCount();
    alert(`${name} added to cart!`);
  });
});

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Update cart count
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// Remove from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartCount();
  showCheckoutItems();
}

// Show checkout items
function showCheckoutItems() {
  if (cart.length === 0) {
    checkoutItems.innerHTML = "<p>Your cart is empty! 🛒</p>";
  } else {
    let total = 0;
    checkoutItems.innerHTML = cart
      .map((item, index) => {
        total += item.price;
        return `
        <div class="checkout-item">
          <p>${item.name} - $${item.price.toFixed(2)}</p>
          <button class="remove-item" onclick="removeFromCart(${index})">Remove ❌</button>
        </div>
      `;
      })
      .join("");
    checkoutItems.innerHTML += `<hr><h3>Total: $${total.toFixed(2)}</h3>`;
  }
}

// Open checkout
cartLink.addEventListener("click", (e) => {
  e.preventDefault();
  showCheckoutItems();
  checkout.classList.add("show");
});

// Close checkout
closeCheckout.addEventListener("click", () => {
  checkout.classList.remove("show");
});

// Support modal behavior
supportLink.addEventListener("click", (e) => {
  e.preventDefault();
  supportModal.classList.add("show");
});

closeSupport.addEventListener("click", () => {
  supportModal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === supportModal) {
    supportModal.classList.remove("show");
  }
});
