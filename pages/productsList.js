function renderProductsList(products) {
  const productCards = products
    .map(
      (product, index) => `
    <div class="glass-card group" style="animation-delay: ${index * 0.1}s;">
      <div class="text-6xl text-center mb-6 transform group-hover:scale-110 transition-transform duration-300">📱</div>
      <h3 class="font-semibold text-lg mb-3 tracking-wide" style="color: #1D1D1F;">${product.name}</h3>
      <p class="product-price text-3xl font-bold mb-3">$${product.price.toFixed(2)}</p>
      <p class="text-sm mb-6 leading-relaxed" style="color: #86868B;">${product.description}</p>
      <a href="/product/${product.id}" class="glass-button inline-block w-full text-center px-6 py-3 text-white no-underline rounded-xl font-medium text-sm">
        View Details →
      </a>
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
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
                background: #F5F5F7;
                min-height: 100vh;
                position: relative;
                overflow-x: hidden;
            }
            
            /* Subtle animated background elements */
            body::before, body::after {
                content: '';
                position: fixed;
                border-radius: 50%;
                filter: blur(120px);
                opacity: 0.12;
                animation: float 30s infinite ease-in-out;
                z-index: 0;
            }
            
            body::before {
                width: 700px;
                height: 700px;
                background: radial-gradient(circle, #0071E3, #D2D2D7);
                top: 10%;
                right: -200px;
                animation-delay: -5s;
            }
            
            body::after {
                width: 600px;
                height: 600px;
                background: radial-gradient(circle, #86868B, #D2D2D7);
                bottom: 10%;
                left: -200px;
                animation-delay: -15s;
            }
            
            @keyframes float {
                0%, 100% { transform: translate(0, 0) scale(1); }
                50% { transform: translate(50px, -50px) scale(1.05); }
            }
            
            /* Glass morphism effects */
            .glass {
                background: rgba(255, 255, 255, 0.7);
                backdrop-filter: blur(20px) saturate(180%);
                -webkit-backdrop-filter: blur(20px) saturate(180%);
                border: 1px solid rgba(0, 0, 0, 0.06);
                box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08),
                            inset 0 1px 0 0 rgba(255, 255, 255, 0.8);
            }
            
            .glass-card {
                background: rgba(255, 255, 255, 0.85);
                backdrop-filter: blur(25px) saturate(180%);
                -webkit-backdrop-filter: blur(25px) saturate(180%);
                border: 1px solid rgba(0, 0, 0, 0.08);
                border-radius: 24px;
                padding: 2rem;
                box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.08),
                            inset 0 1px 1px 0 rgba(255, 255, 255, 0.9);
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                opacity: 0;
                animation: fadeInUp 0.6s ease forwards;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .glass-card:hover {
                transform: translateY(-8px) scale(1.02);
                background: rgba(255, 255, 255, 0.95);
                border-color: rgba(0, 0, 0, 0.1);
                box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.15),
                            inset 0 2px 2px 0 rgba(255, 255, 255, 1);
            }
            
            .glass-button {
                background: #0071E3;
                color: #FFFFFF;
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: none;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 4px 16px rgba(0, 113, 227, 0.25);
            }
            
            .glass-button:hover {
                background: #0077ED;
                transform: translateY(-2px);
                box-shadow: 0 8px 24px rgba(0, 113, 227, 0.35);
            }
            
            .product-price {
                color: #1D1D1F;
            }
            
            nav a {
                position: relative;
                transition: all 0.3s ease;
                color: #1D1D1F;
            }
            
            nav a::after {
                content: '';
                position: absolute;
                bottom: -4px;
                left: 0;
                width: 0;
                height: 2px;
                background: #0071E3;
                transition: width 0.3s ease;
            }
            
            nav a:hover::after {
                width: 100%;
            }
            
            .page-title {
                color: #1D1D1F;
            }
            
            * {
                position: relative;
                z-index: 1;
            }
        </style>
    </head>
    <body>
        <nav class="glass sticky top-0 p-4 rounded-b-3xl mx-4 mt-4">
            <div class="max-w-7xl mx-auto flex items-center justify-between">
                <div class="flex gap-8">
                    <a href="/" class="no-underline font-medium text-sm tracking-wide hover:scale-105 transition-transform">🏠 Home</a>
                    <a href="/products" class="no-underline font-medium text-sm tracking-wide hover:scale-105 transition-transform">📦 Products</a>
                </div>
            </div>
        </nav>
        
        <div class="max-w-7xl mx-auto px-6 py-12">
            <h1 class="page-title text-5xl font-bold mb-12 tracking-tight">Our Products</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                ${productCards}
            </div>
        </div>
    </body>
    </html>
  `;
}

module.exports = { renderProductsList };
