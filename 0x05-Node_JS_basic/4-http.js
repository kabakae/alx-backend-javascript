const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!\n');
});

// Make the app listen on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the app for potential testing or usage in other files
module.exports = app;
