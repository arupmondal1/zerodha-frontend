function Products() {

  const products = [
    {
      title: "Kite",
      description:
        "A powerful and intuitive trading platform for stocks, derivatives and more.",
    },
    {
      title: "Coin",
      description:
        "Invest in direct mutual funds with a simple and easy-to-use platform.",
    },
    {
      title: "Console",
      description:
        "Track your investments, analyse your portfolio and view detailed reports.",
    },
    {
      title: "Varsity",
      description:
        "Learn about investing and trading through simple educational content.",
    },
  ];

  return (
    <section className="products-section" id="products">

      <div className="section-heading">

        <h2>Explore our products</h2>

        <p>
          Everything you need to invest, trade and learn.
        </p>

      </div>

      <div className="products-grid">

        {products.map((product) => (

          <div className="product-card" key={product.title}>

            <div className="product-icon">
              {product.title.charAt(0)}
            </div>

            <h3>{product.title}</h3>

            <p>{product.description}</p>

            <a href="#products">
              Learn more →
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Products;