function renderProductsList(products) {
  const productCards = products
    .map(
      (product) => `
    <div class="product-card">
      <div class="product-image">📱</div>
      <h3>${product.name}</h3>
      <p class="price">$${product.price.toFixed(2)}</p>
      <p class="description">${product.description}</p>
      <a href="/product/${product.id}" class="btn-view">View Details</a>
    </div>
  `
    )
    .join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TechShop - Products</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: Arial, sans-serif; background: #f5f5f5; }
            nav { background: #333; padding: 1rem; }
            nav a { color: white; text-decoration: none; margin-right: 2rem; }
            .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
            h1 { margin-bottom: 2rem; }
            .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 2rem; }
            .product-card { background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s; }
            .product-card:hover { transform: translateY(-5px); }
            .product-image { font-size: 3rem; text-align: center; margin-bottom: 1rem; }
            .product-card h3 { margin-bottom: 0.5rem; }
            .price { font-size: 1.5rem; color: #007bff; font-weight: bold; margin-bottom: 0.5rem; }
            .description { color: #666; font-size: 0.9rem; margin-bottom: 1rem; }
            .btn-view { display: inline-block; padding: 0.6rem 1.2rem; background: #007bff; color: white; text-decoration: none; border-radius: 4px; }
            .btn-view:hover { background: #0056b3; }
        </style>
    </head>
    <body>
        <nav>
            <a href="/">🏠 Home</a>
            <a href="/products">📦 Products</a>
        </nav>
        <div class="container">
            <h1>Our Products</h1>
            <div class="products-grid">
                ${productCards}
            </div>
        </div>
    </body>
    </html>
  `;
}

module.exports = { renderProductsList };
