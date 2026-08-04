import useMagnetic from "../lib/useMagnetic";

export default function Header({ menuOpen, onToggleMenu }) {
  const contactRef = useMagnetic();
  const toggleRef = useMagnetic(0.5);

  return (
    <header className="container mx-auto">
      <div className="navbar glass" style={{ borderRadius: "999px" }}>
        <div className="logo">
          <a href="#hero">ApplyDirect</a>
        </div>
        <div className="nav-btns">
          <a href="#contact" ref={contactRef} className="btn-pill btn-dark">
            <span>Contact</span>
          </a>
          <div
            ref={toggleRef}
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={onToggleMenu}
            role="button"
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
          </div>
        </div>
      </div>
    </header>
  );
}
