const express = require('express');
const { handleRoute } = require('./routes');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// Handle routes
app.get('*', (req, res) => {
  handleRoute(req.path, res);
});

app
  .listen(port, () => {
    console.log(`TechShop server running at http://localhost:${port}`);
  })
  .on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.log(`Port ${port} is busy, trying ${port + 1}...`);
      app.listen(port + 1);
    } else {
      console.error('Server error:', error);
    }
  });
