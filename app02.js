const { add, subtract, multiply, divide } = require('./math');
const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (req.method === 'GET') {
    if (
      ['/add', '/substract', '/multiply', '/divide'].includes(parsedUrl.pathname)
    ) {
      const operation = parsedUrl.pathname.substring(1);
      const { a = '', b = '' } = parsedUrl.query;
      let result = '';

      if (a !== '' && b !== '') {
        try {
          const numA = parseFloat(a);
          const numB = parseFloat(b);
          switch (operation) {
            case 'add':
              result = `${numA} + ${numB} = ${add(numA, numB)}`;
              break;
            case 'substract':
              result = `${numA} - ${numB} = ${substract(numA, numB)}`;
              break;
            case 'multiply':
              result = `${numA} * ${numB} = ${multiply(numA, numB)}`;
              break;
            case 'divide':
              result = `${numA} / ${numB} = ${divide(numA, numB)}`;
              break;
          }
        } catch (error) {
          res.statusCode = 400;
          result = error.message;
        }
      }

      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Calculator - ${operation}</title>
        </head>
        <body>
            <h2>${operation.charAt(0).toUpperCase() + operation.slice(1)}</h2>
            <form method="GET" action="/${operation}">
                <input type="number" name="a" value="${a}" placeholder="First number" required>
                <input type="number" name="b" value="${b}" placeholder="Second number" required>
                <button type="submit">Calculate</button>
            </form>
            <p>${result}</p>
            <p><a href="/">Back to Home</a></p>
        </body>
        </html>
      `);
    } else {
      res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Calculator</title>
        </head>
        <body>
            <h2>Calculator</h2>
            <a href="/add">Add</a><br>
            <a href="/substract">Substract</a><br>
            <a href="/multiply">Multiply</a><br>
            <a href="/divide">Divide</a>
        </body>
        </html>`);
    }
  }
});

const port = process.env.PORT || 4000; // Change default port to 4000

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`Port ${port} is busy, trying ${port + 1}...`);
    server.listen(port + 1);
  } else {
    console.error('Server error:', error);
  }
});

server.listen(port, () => {
  console.log(
    `Server កំពុងដំណើរការនៅ port http://localhost:${server.address().port}`
  );
});
