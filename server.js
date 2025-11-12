const http = require('http');
const fs = require('fs');
const path = require('path');
const { handleRoute } = require('./routes');

const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  try {
    // Check if request is for a static file (images, css, etc.)
    if (req.url.startsWith('/images/')) {
      const filePath = path.join(__dirname, 'public', req.url);

      // Check if file exists
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath);
        const ext = path.extname(filePath);

        // Set appropriate content type
        let contentType = 'application/octet-stream';
        if (ext === '.png') contentType = 'image/png';
        else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
        else if (ext === '.gif') contentType = 'image/gif';
        else if (ext === '.webp') contentType = 'image/webp';

        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.end(fileContent);
        return;
      }
    }

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
