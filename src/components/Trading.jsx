function Trading() {
  return (
    <section className="trading-section" id="about">

      <div className="trading-content">

        <div className="trading-text">

          <h2>
            Powerful tools for
            <br />
            serious investors
          </h2>

          <p>
            Trade and invest with simple, powerful and
            reliable tools designed for everyone.
          </p>

          <div className="trading-links">

            <a href="#products">
              Explore our products →
            </a>

            <a href="#pricing">
              View pricing →
            </a>

          </div>

        </div>

        <div className="trading-dashboard">

          <div className="dashboard-header">
            <span>Portfolio</span>
            <span>₹1,24,500</span>
          </div>

          <div className="chart">

            <div className="chart-line"></div>

          </div>

          <div className="dashboard-stats">

            <div>
              <small>Invested</small>
              <strong>₹1,00,000</strong>
            </div>

            <div>
              <small>Returns</small>
              <strong>₹24,500</strong>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Trading;