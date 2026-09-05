import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <div className="logo-symbol">Z</div>
          <span>ZERODHA</span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links">
          <a href="#products">Products</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#support">Support</a>
        </div>

        {/* Menu Button */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#products" onClick={() => setMenuOpen(false)}>
            Products
          </a>

          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#support" onClick={() => setMenuOpen(false)}>
            Support
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;