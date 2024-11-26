const http = require('http');
const fs = require('fs');

// Function to count and group students dynamically by the last column in the CSV
function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length < 2) {
        reject(new Error('No valid data found in the database'));
        return;
      }

      const header = lines[0].split(',');
      const groupColumnIndex = header.length - 1; // Use the last column for grouping
      const fields = lines.slice(1);

      const students = {};
      fields.forEach((line) => {
        const row = line.split(',');
        const name = row[0];
        const group = row[groupColumnIndex] ? row[groupColumnIndex].trim() : null;

        if (name && group) {
          if (!students[group]) {
            students[group] = [];
          }
          students[group].push(name);
        }
      });

      let report = `Number of students: ${fields.length}`;
      Object.entries(students).forEach(([group, names]) => {
        report += `\nNumber of students in ${group}: ${names.length}. List: ${names.join(', ')}`;
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

