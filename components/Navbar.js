function renderNavbar(currentPath = '/') {
  // Determine which link is active based on currentPath
  const isHomeActive = currentPath === '/' || currentPath === '';
  const isProductsActive = currentPath.startsWith('/products');

  return `
    <style>
      ${require('fs').readFileSync(require('path').resolve(__dirname, '../styles/Navbar.module.css'), 'utf8')}
    </style>
    <nav class="navbar">
      <div class="navbarContainer">
        <div class="navLinks">
          <a href="/" class="navLink" ${isHomeActive ? 'aria-current="page"' : ''}>
            🏠 Home
          </a>
          <a href="/products" class="navLink" ${isProductsActive ? 'aria-current="page"' : ''}>
            📦 Products
          </a>
        </div>
      </div>
    </nav>
  `;
}

module.exports = { renderNavbar };
