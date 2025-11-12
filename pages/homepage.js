function renderHomepage(currentPath = '/') {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TechShop - Home</title>
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
                min-height: 100vh;
                display: flex;
                flex-direction: column;
            }
            
            .content {
                flex: 1;
            }
            
            /* Apple-style Footer */
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
            
            @media (max-width: 768px) {
                .footer-links {
                    grid-template-columns: 1fr 1fr;
                }
                
                .footer-base {
                    flex-direction: column;
                    align-items: flex-start;
                }
                
                .copyright {
                    margin-bottom: 15px;
                }
                
                .legal-links {
                    flex-direction: column;
                    width: 100%;
                }
                
                .legal-links a {
                    margin: 0 0 8px 0;
                    display: block;
                }
            }
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
                opacity: 0.15;
                animation: float 30s infinite ease-in-out;
                z-index: 0;
            }
            
            body::before {
                width: 800px;
                height: 800px;
                background: radial-gradient(circle, #0071E3, #86868B);
                top: -300px;
                left: -300px;
                animation-delay: 0s;
            }
            
            body::after {
                width: 700px;
                height: 700px;
                background: radial-gradient(circle, #86868B, #D2D2D7);
                bottom: -250px;
                right: -250px;
                animation-delay: -15s;
            }
            
            @keyframes float {
                0%, 100% { transform: translate(0, 0) scale(1); }
                50% { transform: translate(50px, -50px) scale(1.05); }
            }
            
            /* Glass morphism effect */
            .glass {
                background: rgba(255, 255, 255, 0.7);
                backdrop-filter: blur(20px) saturate(180%);
                -webkit-backdrop-filter: blur(20px) saturate(180%);
                border: 1px solid rgba(0, 0, 0, 0.06);
                box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08),
                            inset 0 1px 0 0 rgba(255, 255, 255, 0.8);
            }
            
            .glass-strong {
                background: rgba(255, 255, 255, 0.85);
                backdrop-filter: blur(30px) saturate(200%);
                -webkit-backdrop-filter: blur(30px) saturate(200%);
                border: 1px solid rgba(0, 0, 0, 0.08);
                box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12),
                            inset 0 1px 2px 0 rgba(255, 255, 255, 0.9);
            }
            
            .glass-button {
                background: #0071E3;
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: none;
                color: #FFFFFF;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 4px 16px rgba(0, 113, 227, 0.25);
            }
            
            .glass-button:hover {
                background: #0077ED;
                transform: translateY(-2px);
                box-shadow: 0 8px 24px rgba(0, 113, 227, 0.35);
            }
            
            .glass-button:active {
                transform: translateY(0);
            }
            
            nav {
                z-index: 9999 !important;
                position: relative;
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
            
            .hero-title {
                color: #1D1D1F;
                animation: shimmer 3s infinite;
            }
            
            @keyframes shimmer {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.85; }
            }
            
            * {
                position: relative;
                z-index: 1;
            }
        </style>
    </head>
    <body>
        ${require('../components/Navbar').renderNavbar(currentPath)}
        
        <div class="max-w-6xl mx-auto px-6 py-16">
            <div class="glass-strong p-16 text-center rounded-[32px] shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <h1 class="hero-title text-6xl font-bold mb-6 tracking-tight">Welcome to TechShop</h1>
                <p class="text-xl mb-12 font-light tracking-wide max-w-2xl mx-auto leading-relaxed" style="color: #86868B;">Discover amazing tech products at great prices. Experience the future of shopping with our curated collection.</p>
                <a href="/products" class="glass-button inline-block px-10 py-4 text-white no-underline rounded-2xl font-semibold text-lg shadow-lg">
                    Shop Now →
                </a>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div class="glass p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
                    <div class="text-5xl mb-4">⚡</div>
                    <h3 class="font-semibold text-xl mb-2" style="color: #1D1D1F;">Fast Delivery</h3>
                    <p class="text-sm" style="color: #86868B;">Get your products delivered within 24 hours</p>
                </div>
                <div class="glass p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
                    <div class="text-5xl mb-4">🛡️</div>
                    <h3 class="font-semibold text-xl mb-2" style="color: #1D1D1F;">Secure Payment</h3>
                    <p class="text-sm" style="color: #86868B;">Your transactions are safe and encrypted</p>
                </div>
                <div class="glass p-8 rounded-3xl hover:scale-105 transition-transform duration-300">
                    <div class="text-5xl mb-4">💎</div>
                    <h3 class="font-semibold text-xl mb-2" style="color: #1D1D1F;">Premium Quality</h3>
                    <p class="text-sm" style="color: #86868B;">Only the best products for our customers</p>
                </div>
            </div>
        </div>
        <div class="content">
            <!-- Your existing content here -->
        </div>
        
        ${require('../utils/footer').renderFooter()}
    </body>
    </html>
  `;
}

module.exports = { renderHomepage };
