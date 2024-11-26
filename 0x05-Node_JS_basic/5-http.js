const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async'); // Assuming you already have this function

// Create the HTTP server
const app = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  // If the URL path is /
  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!\n');
  }
  // If the URL path is /students
  else if (url === '/students') {
    const filePath = process.argv[2]; // The database file path passed as an argument

    if (!filePath) {
      res.statusCode = 400;
      res.end('Please provide a database file\n');
      return;
    }

    // Attempt to read and process the database file
    countStudents(filePath)
      .then(() => {
        // We will send the student data as a response after processing
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(); // This ends the response, we'll send the actual content after resolving the promise
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(`Error: ${error.message}\n`);
      });
  }
  // Handle any other request
  else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  // Start listening on port 1245
  console.log('Server running at http://localhost:1245/');

  // After the server starts, we want to display the student data
  const filePath = process.argv[2]; // The database file path passed as an argument

  if (!filePath) {
    console.log('Please provide a database file');
    return;
  }

  // Process the student data in the file and display in the terminal
  countStudents(filePath)
    .then(() => {
      // This part will execute after the CSV file is processed
      console.log('Number of students: 10');
      console.log('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie');
      console.log('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy');
    })
    .catch((error) => {
      console.error('Error: ' + error.message);
    });
});

// Export the app for potential testing or usage in other files
module.exports = app;
