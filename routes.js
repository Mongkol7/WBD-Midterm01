const { renderHomepage } = require('./pages/homepage');
const { renderProductsList } = require('./pages/productsList');
const { renderProductDetails } = require('./pages/productDetails');
const { render404Page } = require('./pages/notFound');
const { products } = require('./data/products');

function handleRoute(pathname, res) {
  if (pathname === '/') {
    res.end(renderHomepage());
  } else if (pathname === '/products') {
    res.end(renderProductsList(products));
  } else if (pathname.startsWith('/product/')) {
    const productId = parseInt(pathname.split('/')[2]);
    const product = products.find((p) => p.id === productId);

    if (product) {
      res.end(renderProductDetails(product));
    } else {
      res.statusCode = 404;
      res.end(render404Page());
    }
  } else {
    res.statusCode = 404;
    res.end(render404Page());
  }
}

module.exports = { handleRoute };
