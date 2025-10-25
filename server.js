const http = require('http');
const url = require('url');
const { handleRoute } = require('./routes');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  handleRoute(parsedUrl.pathname, res);
});

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`TechShop server running at http://localhost:${port}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`Port ${port} is busy, trying ${port + 1}...`);
    server.listen(port + 1);
  } else {
    console.error('Server error:', error);
  }
});

