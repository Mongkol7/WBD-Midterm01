function render404Page() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Page Not Found</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
                background: #F5F5F7;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                overflow: hidden;
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
                width: 600px;
                height: 600px;
                background: radial-gradient(circle, #0071E3, #D2D2D7);
                top: -150px;
                left: 50%;
                transform: translateX(-50%);
                animation-delay: 0s;
            }
            
            body::after {
                width: 500px;
                height: 500px;
                background: radial-gradient(circle, #86868B, #D2D2D7);
                bottom: -200px;
                left: 50%;
                transform: translateX(-50%);
                animation-delay: -15s;
            }
            
            @keyframes float {
                0%, 100% { transform: translateX(-50%) translateY(0) scale(1); }
                50% { transform: translateX(-50%) translateY(-30px) scale(1.05); }
            }
            
            /* Glass morphism container */
            .glass-container {
                background: rgba(255, 255, 255, 0.85);
                backdrop-filter: blur(30px) saturate(180%);
                -webkit-backdrop-filter: blur(30px) saturate(180%);
                border: 1px solid rgba(0, 0, 0, 0.08);
                border-radius: 40px;
                padding: 4rem 3rem;
                box-shadow: 0 12px 48px 0 rgba(0, 0, 0, 0.15),
                            inset 0 2px 2px 0 rgba(255, 255, 255, 0.9);
                text-align: center;
                max-width: 600px;
                position: relative;
                z-index: 1;
                animation: fadeInScale 0.8s ease;
            }
            
            @keyframes fadeInScale {
                from {
                    opacity: 0;
                    transform: scale(0.9);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
            
            .error-code {
                font-size: 10rem;
                font-weight: 800;
                color: #1D1D1F;
                line-height: 1;
                margin-bottom: 1.5rem;
                animation: pulse 3s ease-in-out infinite;
            }
            
            @keyframes pulse {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.8; transform: scale(0.98); }
            }
            
            .error-title {
                color: #1D1D1F;
                font-size: 2rem;
                font-weight: 700;
                margin-bottom: 1rem;
                letter-spacing: -0.02em;
            }
            
            .error-message {
                color: #86868B;
                font-size: 1.125rem;
                font-weight: 400;
                margin-bottom: 3rem;
                line-height: 1.6;
            }
            
            .glass-button {
                display: inline-block;
                background: #0071E3;
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: none;
                padding: 1rem 3rem;
                border-radius: 16px;
                color: #FFFFFF;
                text-decoration: none;
                font-weight: 600;
                font-size: 1rem;
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
            
            .icon {
                font-size: 4rem;
                margin-bottom: 1.5rem;
                animation: float-icon 3s ease-in-out infinite;
            }
            
            @keyframes float-icon {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
        </style>
    </head>
    <body>
        <div class="glass-container">
            <div class="icon">🔍</div>
            <div class="error-code">404</div>
            <h1 class="error-title">Page Not Found</h1>
            <p class="error-message">The page you're looking for doesn't exist or has been moved to another location.</p>
            <a href="/" class="glass-button">
                Return to Home
            </a>
        </div>
    </body>
    </html>
  `;
}

module.exports = { render404Page };
