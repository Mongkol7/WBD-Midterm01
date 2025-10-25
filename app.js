const http = require('http');// to create a server
const { add, substract, multiply, divide } = require('./math');
const url = require('url'); // to parse URLs for handling requests
const querystring = require('querystring');// to parse form data for POST requests

// creates an HTTP server with a callback function that runs for every incoming request
const server = http.createServer((req, res) => {
  // Parse incoming requests for URL and method
  const parsedUrl = url.parse(req.url, true);
  //url.parse(): This Node.js function breaks down the URL(data_stored) into its components.
  //The true parameter tells it to also parse query strings automatically.

  //When someone visits the root URL with a GET request, the server sends back the HTML form:
  if (req.method === 'GET' && parsedUrl.pathname === '/') {
    //handling GET request, the server sends back the HTML form when someone accesses the root URL (/)
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.end: sends the HTML to the browser
    res.end(`
            <html>
                <body>
                    <h2>Calculator</h2>
                    <form method="post" action="/" id="calcForm">
                        <input type="number" name="a" placeholder="Enter first number" required><br><br>
                        <input type="number" name="b" placeholder="Enter second number" required><br><br>
                        <button type="submit">Calculate</button>
                    </form>
                    <div id="results">
                        ${parsedUrl.query.results || ''}
                    </div>
                </body>
            </html>
        `);
  } else if (req.method === 'POST' && parsedUrl.pathname === '/') {
    //Handling POST Requests (Form Submission)
    let body = '';
    //POST data arrives as chunks (pieces of data)
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    //Form data might come in multiple chunks, so you have to combine them.
    req.on('end', () => {
      // converts it to an object like { a: "5", b: "3" }.
      const formData = querystring.parse(body); //Chunk to manually parsed raw form data (a=5&b=3)
      const a = parseFloat(formData.a);// convert string to number
      const b = parseFloat(formData.b);

      const results = `
                <h3>Results:</h3>
                <p>Addition: ${add(a, b)}</p>
                <p>Subtraction: ${substract(a, b)}</p>
                <p>Multiplication: ${multiply(a, b)}</p>
                <p>Division: ${divide(a, b)}</p>
            `;
      //302 means redirect
      res.writeHead(302, {
        Location: `/?results=${encodeURIComponent(results)}`,
      });
      res.end();
    });
  } else {
    //If the URL doesn't match
    res.writeHead(404);
    res.end('Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
