function renderHomepage() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TechShop - Home</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: Arial, sans-serif; background: #f5f5f5; }
            nav { background: #333; padding: 1rem; }
            nav a { color: white; text-decoration: none; margin-right: 2rem; }
            nav a:hover { text-decoration: underline; }
            .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
            .hero { background: #007bff; color: white; padding: 3rem; text-align: center; border-radius: 8px; margin-bottom: 2rem; }
            .hero h1 { font-size: 2.5rem; margin-bottom: 1rem; }
            .hero p { font-size: 1.2rem; margin-bottom: 2rem; }
            .btn { display: inline-block; padding: 0.8rem 2rem; background: white; color: #007bff; text-decoration: none; border-radius: 4px; font-weight: bold; }
            .btn:hover { background: #f0f0f0; }
        </style>
    </head>
    <body>
        <nav>
            <a href="/">🏠 Home</a>
            <a href="/products">📦 Products</a>
        </nav>
        <div class="container">
            <div class="hero">
                <h1>Welcome to TechShop</h1>
                <p>Discover amazing tech products at great prices</p>
                <a href="/products" class="btn">Shop Now</a>
            </div>
        </div>
    </body>
    </html>
  `;
}

module.exports = { renderHomepage };
