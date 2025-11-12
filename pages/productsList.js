function renderProductsList(products, currentPath = '/products') {
  const productCards = products
    .map(
      (product, index) => `
    <div class="glass-card group flex flex-col" style="animation-delay: ${
      index * 0.1
    }s;">
            <div class="text-center mb-6 overflow-visible rounded-t-lg h-48">
                <img src="${product.image}" alt="${
        product.name
      }" class="product-image w-full h-full object-contain transform transition-transform duration-300" />
            </div>
      <h3 class="font-semibold text-lg mb-3 tracking-wide" style="color: #1D1D1F;">${
        product.name
      }</h3>
      <p class="product-price text-3xl font-bold mb-3">$${product.price.toFixed(
        2
      )}</p>
      <p class="text-sm mb-6 leading-relaxed flex-grow" style="color: #86868B;">${
        product.description
      }</p>
      <a href="/product/${
        product.id
      }" class="glass-button inline-block w-full text-center px-6 py-3 text-white no-underline rounded-xl font-medium text-sm">
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
                /* keep card background but allow overflow so images can pop out */
                overflow: visible;
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
                /* keep border accent on hover but do not change background or add shadows */
                border-color: rgba(0, 0, 0, 0.08);
            }

            /* image pop-out effect */
            .product-image {
                transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s ease;
                position: relative;
                z-index: 1;
            }

            .glass-card:hover .product-image {
                transform: translateY(-12px) scale(1.18);
                /* no shadow on hover per request */
                z-index: 60;
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
            
            nav {
                z-index: 1000 !important;
            }
            
            * {
                position: relative;
                z-index: 1;
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
                margin: 4rem 0 0 0;
                width: 100%;
                position: relative;
                left: 0;
                right: 0;
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
        </style>
    </head>
    <body>
        ${require('../components/Navbar').renderNavbar(currentPath)}
        
        <div class="max-w-7xl mx-auto px-6 py-12">
            <h1 class="page-title text-5xl font-bold mb-12 tracking-tight">Our Products</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                ${productCards}
            </div>
        </div>
        
        ${require('../utils/footer').renderFooter()}
    </body>
    </html>
  `;
}

module.exports = { renderProductsList };
