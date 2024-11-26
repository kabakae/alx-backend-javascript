const http = require('http');
const fs = require('fs');
const { parse } = require('path');

// Function to count and group students
function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length === 0) {
        reject(new Error('No valid data found in the database'));
        return;
      }

      const students = {};
      const fields = lines.slice(1); // Skip the header

      fields.forEach((line) => {
        const [firstName, field] = line.split(',').map((item) => item.trim());
        if (firstName && field) {
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstName);
        }
      });

      let report = `Number of students: ${fields.length}`;
      Object.entries(students).forEach(([field, names]) => {
        report += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      });

      resolve(report);
    });
  });
}

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    const dbFile = process.argv[2]; // Get the database file from arguments
    if (!dbFile) {
      res.end('Error: Missing database file');
      return;
    }

    try {
      const report = await countStudents(dbFile);
      res.end(report);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Server listens on port 1245
app.listen(1245);

module.exports = app;

