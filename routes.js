const { renderHomepage } = require('./pages/homepage');
const { renderProductsList } = require('./pages/productsList');
const { renderProductDetails } = require('./pages/productDetails');
const { render404Page } = require('./pages/notFound');
const { products } = require('./data/products');

function handleRoute(pathname, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (pathname === '/') {
    res.send(renderHomepage());
  } else if (pathname === '/products') {
    res.send(renderProductsList(products));
  } else if (pathname.startsWith('/product/')) {
    const productId = parseInt(pathname.split('/')[2]);
    const product = products.find((p) => p.id === productId);

    if (product) {
      res.send(renderProductDetails(product));
    } else {
      res.status(404).send(render404Page());
    }
  } else {
    res.status(404).send(render404Page());
  }
}

module.exports = { handleRoute };
