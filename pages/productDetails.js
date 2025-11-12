function renderProductDetails(product, currentPath = '/') {
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
            
            /* Footer Styles */
            .footer {
                background: #f5f5f7;
                color: #86868b;
                font-size: 12px;
                line-height: 1.33337;
                font-weight: 400;
                letter-spacing: -.01em;
                font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Apple Legacy Chevron",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
                padding: 20px 0;
                border-top: 1px solid #d2d2d7;
                margin-top: 4rem;
            }
            
            .footer-content {
                max-width: 1000px;
                margin: 0 auto;
                padding: 0 22px;
            }
            
            .footer-cta {
                padding: 17px 0 11px;
                text-align: center;
                border-bottom: 1px solid #d2d2d7;
                margin-bottom: 20px;
            }
            
            .footer-cta p {
                max-width: 600px;
                margin: 0 auto 10px;
                font-size: 14px;
                line-height: 1.42859;
                color: #1d1d1f;
            }
            
            .footer-cta a {
                color: #0066cc;
                text-decoration: none;
                font-size: 14px;
            }
            
            .footer-cta a:hover {
                text-decoration: underline;
            }
            
            .footer-links {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 20px;
                margin-bottom: 20px;
            }
            
            .footer-column h3 {
                font-size: 12px;
                font-weight: 600;
                color: #1d1d1f;
                margin-bottom: 10px;
                letter-spacing: 0.05em;
            }
            
            .footer-column ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .footer-column li {
                margin-bottom: 8px;
            }
            
            .footer-column a {
                color: #424245;
                text-decoration: none;
                font-size: 12px;
                transition: color 0.3s ease;
            }
            
            .footer-column a:hover {
                color: #0066cc;
                text-decoration: underline;
            }
            
            .footer-base {
                border-top: 1px solid #d2d2d7;
                padding-top: 20px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
            }
            
            .copyright {
                margin-right: 30px;
                margin-bottom: 10px;
                font-size: 12px;
                color: #86868b;
            }
            
            .legal-links {
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 10px;
            }
            
            .legal-links a {
                color: #424245;
                text-decoration: none;
                margin-right: 20px;
                white-space: nowrap;
                font-size: 12px;
            }
            
            .legal-links a:hover {
                text-decoration: underline;
                color: #0066cc;
            }
            
            .developers {
                width: 100%;
                margin-top: 15px;
                padding-top: 15px;
                border-top: 1px solid #d2d2d7;
            }
            
            .developers h3 {
                font-size: 12px;
                font-weight: 600;
                color: #1d1d1f;
                margin-bottom: 10px;
            }
            
            .developers-list {
                display: flex;
                flex-wrap: wrap;
                gap: 10px 30px;
                margin: 0;
                padding: 0;
                list-style: none;
            }
            
            .developers-list li {
                color: #424245;
                font-size: 12px;
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
            
            nav {
                z-index: 1000 !important;
            }
            
            * {
                position: relative;
                z-index: 1;
            }
        </style>
    </head>
    <body>
        ${require('../components/Navbar').renderNavbar(currentPath)}
        
        <div class="max-w-6xl mx-auto px-6 py-12">
            <div class="glass-panel p-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${
    product.name
  }" class="w-full h-auto max-w-sm object-cover rounded-lg" />
                </div>
                
                <div class="flex flex-col justify-center">
                    <h1 class="text-5xl font-bold mb-4 tracking-tight" style="color: #1D1D1F;">${
                      product.name
                    }</h1>
                    <p class="price-tag text-6xl font-bold mb-6">$${product.price.toFixed(
                      2
                    )}</p>
                    <p class="text-lg mb-8 leading-relaxed" style="color: #86868B;">${
                      product.description
                    }</p>
                    
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
        ${require('../utils/footer').renderFooter()}
    </body>
    </html>
  `;
}

module.exports = { renderProductDetails };
