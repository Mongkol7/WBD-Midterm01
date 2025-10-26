const { renderHomepage } = require('./pages/homepage');
const { renderProductsList } = require('./pages/productsList');
const { renderProductDetails } = require('./pages/productDetails');
const { render404Page } = require('./pages/notFound');
const { products } = require('./data/products');

function handleRoute(url, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (url === '/') {
    res.end(renderHomepage());
  } else if (url === '/products') {
    res.end(renderProductsList(products));
  } else if (url.startsWith('/product/')) {
    const productId = parseInt(url.split('/')[2]);
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
