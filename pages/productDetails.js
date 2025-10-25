function renderProductDetails(product) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TechShop - ${product.name}</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: Arial, sans-serif; background: #f5f5f5; }
            nav { background: #333; padding: 1rem; }
            nav a { color: white; text-decoration: none; margin-right: 2rem; }
            .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
            .product-detail { background: white; padding: 2rem; border-radius: 8px; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
            .product-image { font-size: 8rem; text-align: center; }
            .product-info h1 { margin-bottom: 1rem; }
            .price { font-size: 2rem; color: #007bff; font-weight: bold; margin-bottom: 1rem; }
            .description { color: #666; margin-bottom: 2rem; line-height: 1.6; }
            .btn { display: inline-block; padding: 0.8rem 2rem; background: #007bff; color: white; text-decoration: none; border-radius: 4px; margin-right: 1rem; cursor: pointer; border: none; }
            .btn:hover { background: #0056b3; }
            .back-link { color: #007bff; text-decoration: none; }
            .back-link:hover { text-decoration: underline; }
            @media (max-width: 768px) {
                .product-detail { grid-template-columns: 1fr; }
            }
        </style>
    </head>
    <body>
        <nav>
            <a href="/">🏠 Home</a>
            <a href="/products">📦 Products</a>
        </nav>
        <div class="container">
            <div class="product-detail">
                <div class="product-image">📱</div>
                <div class="product-info">
                    <h1>${product.name}</h1>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <p class="description">${product.description}</p>
                    <button class="btn">Add to Cart</button>
                    <button class="btn" style="background: #6c757d;">Buy Now</button>
                    <p><a href="/products" class="back-link">← Back to Products</a></p>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
}

module.exports = { renderProductDetails };
