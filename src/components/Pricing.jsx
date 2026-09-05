function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-header">
        <h2>Unbeatable pricing</h2>
        <p>
          Simple and transparent pricing for all your investments.
        </p>
      </div>

      <div className="pricing-container">

        <div className="pricing-card">
          <div className="pricing-icon">₹</div>

          <h3>Free Equity Delivery</h3>

          <p>
            All equity delivery investments are absolutely free.
          </p>

          <h4>₹0</h4>
        </div>


        <div className="pricing-card">
          <div className="pricing-icon">₹</div>

          <h3>Intraday & F&O</h3>

          <p>
            Flat ₹20 or 0.03% per executed order, whichever is lower.
          </p>

          <h4>₹20</h4>
        </div>


        <div className="pricing-card">
          <div className="pricing-icon">₹</div>

          <h3>Direct Mutual Funds</h3>

          <p>
            Invest in direct mutual funds with zero commission.
          </p>

          <h4>₹0</h4>
        </div>

      </div>
    </section>
  );
}

export default Pricing;