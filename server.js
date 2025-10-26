const http = require('http');
const { handleRoute } = require('./routes');

const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  try {
    // Set default status code
    res.statusCode = 200;
    
    // Handle routes based on req.url
    handleRoute(req.url, res);
  } catch (error) {
    console.error(error.stack);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<h1>Something broke!</h1>');
  }
});

server
  .listen(port, () => {
    console.log(`TechShop server running at http://localhost:${port}`);
  })
  .on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.log(`Port ${port} is busy, trying ${port + 1}...`);
      server.listen(port + 1);
    } else {
      console.error('Server error:', error);
    }
  });
