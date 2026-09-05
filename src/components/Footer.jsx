function Footer() {
  return (
    <footer className="footer" id="support">
      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">Z</div>
          <h3>ZERODHA</h3>
          <p>
            Simple, transparent and powerful tools for
            investing and trading.
          </p>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#pricing">Pricing</a>
          <a href="#education">Education</a>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <a href="#support">Contact us</a>
          <a href="#support">Help center</a>
          <a href="#support">FAQs</a>
          <a href="#support">Support portal</a>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <a href="#education">Varsity</a>
          <a href="#products">Kite</a>
          <a href="#products">Coin</a>
          <a href="#products">Console</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Zerodha Clone. Built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;