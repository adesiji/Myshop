export default function SupportModal({ isOpen, onClose }) {
  return (
    <div
      id="support-modal"
      className={isOpen ? "show" : ""}
      onClick={(e) => {
        // Matches the original behavior: clicking the dark overlay
        // (i.e. the modal backdrop itself, not its content) closes it.
        if (e.target.id === "support-modal") {
          onClose();
        }
      }}
    >
      <div className="support-content">
        <button id="close-support" onClick={onClose}>
          ❌
        </button>
        <h2>Need Help?</h2>
        <p>
          Contact us at{" "}
          <a href="mailto:support@myshop.com">support@myshop.com</a> or call
          1-800-MYSHOP
        </p>
      </div>
    </div>
  );
}
