function renderProductDetails(product) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TechShop - ${product.name}</title>
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
                opacity: 0.1;
                animation: float 30s infinite ease-in-out;
                z-index: 0;
            }
            
            body::before {
                width: 700px;
                height: 700px;
                background: radial-gradient(circle, #0071E3, #D2D2D7);
                top: 50%;
                left: -250px;
                animation-delay: 0s;
            }
            
            body::after {
                width: 600px;
                height: 600px;
                background: radial-gradient(circle, #86868B, #D2D2D7);
                top: 20%;
                right: -200px;
                animation-delay: -15s;
            }
            
            @keyframes float {
                0%, 100% { transform: translate(0, 0) scale(1); }
                50% { transform: translate(60px, -60px) scale(1.05); }
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
            
            .glass-panel {
                background: rgba(255, 255, 255, 0.85);
                backdrop-filter: blur(30px) saturate(180%);
                -webkit-backdrop-filter: blur(30px) saturate(180%);
                border: 1px solid rgba(0, 0, 0, 0.08);
                border-radius: 32px;
                box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12),
                            inset 0 2px 2px 0 rgba(255, 255, 255, 0.9);
                animation: fadeIn 0.8s ease;
            }
            
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
            
            .product-image-container {
                background: rgba(255, 255, 255, 0.6);
                backdrop-filter: blur(15px);
                -webkit-backdrop-filter: blur(15px);
                border: 1px solid rgba(0, 0, 0, 0.06);
                border-radius: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 4rem;
                transition: all 0.4s ease;
            }
            
            .product-image-container:hover {
                background: rgba(255, 255, 255, 0.8);
                transform: scale(1.05) rotate(2deg);
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
                transform: translateY(-3px);
                box-shadow: 0 8px 24px rgba(0, 113, 227, 0.35);
            }
            
            .glass-button:active {
                transform: translateY(-1px);
            }
            
            .glass-button-secondary {
                background: #1D1D1F;
                color: #FFFFFF;
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: none;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
            }
            
            .glass-button-secondary:hover {
                background: #2D2D2F;
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
            }
            
            .price-tag {
                color: #1D1D1F;
                animation: shimmer 3s infinite;
            }
            
            @keyframes shimmer {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.85; }
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
            
            .back-link {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                background: rgba(255, 255, 255, 0.6);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                padding: 0.75rem 1.5rem;
                border-radius: 12px;
                border: 1px solid rgba(0, 0, 0, 0.06);
                transition: all 0.3s ease;
                color: #0071E3;
            }
            
            .back-link:hover {
                background: rgba(255, 255, 255, 0.8);
                transform: translateX(-4px);
            }
            
            .feature-badge {
                background: rgba(255, 255, 255, 0.7);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: 1px solid rgba(0, 0, 0, 0.06);
                display: inline-block;
                padding: 0.5rem 1rem;
                border-radius: 12px;
                margin-right: 0.5rem;
                margin-bottom: 0.5rem;
                color: #86868B;
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
        
        <div class="max-w-6xl mx-auto px-6 py-12">
            <div class="glass-panel p-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="product-image-container">
                    <div class="text-[12rem] leading-none">📱</div>
                </div>
                
                <div class="flex flex-col justify-center">
                    <h1 class="text-5xl font-bold mb-4 tracking-tight" style="color: #1D1D1F;">${product.name}</h1>
                    <p class="price-tag text-6xl font-bold mb-6">$${product.price.toFixed(2)}</p>
                    <p class="text-lg mb-8 leading-relaxed" style="color: #86868B;">${product.description}</p>
                    
                    <div class="mb-8">
                        <h3 class="text-sm font-semibold mb-3 uppercase tracking-wider" style="color: #1D1D1F;">Features</h3>
                        <div class="flex flex-wrap">
                            <span class="feature-badge text-sm">Premium Quality</span>
                            <span class="feature-badge text-sm">Fast Shipping</span>
                            <span class="feature-badge text-sm">1 Year Warranty</span>
                        </div>
                    </div>
                    
                    <div class="flex gap-4 mb-8">
                        <button class="glass-button flex-1 px-8 py-4 text-white rounded-2xl font-semibold text-base cursor-pointer border-none">
                            Add to Cart
                        </button>
                        <button class="glass-button-secondary flex-1 px-8 py-4 text-white rounded-2xl font-semibold text-base cursor-pointer border-none">
                            Buy Now
                        </button>
                    </div>
                    
                    <a href="/products" class="back-link no-underline text-sm font-medium">
                        ← Back to Products
                    </a>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
}

module.exports = { renderProductDetails };
