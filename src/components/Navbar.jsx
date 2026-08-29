export default function Navbar({ cartCount, onCartClick, onSupportClick }) {
  return (
    <header className="navbar">
      <div className="logo">MyShop</div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a
              href="#"
              id="cart-link"
              onClick={(e) => {
                e.preventDefault();
                onCartClick();
              }}
            >
              Cart (<span id="cart-count">{cartCount}</span>)
            </a>
          </li>
          <li>
            <a
              href="#"
              id="support-link"
              onClick={(e) => {
                e.preventDefault();
                onSupportClick();
              }}
            >
              Support
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
