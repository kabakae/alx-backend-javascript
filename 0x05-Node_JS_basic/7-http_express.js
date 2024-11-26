const express = require('express');
const fs = require('fs');

// Function to count and group students dynamically
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

// Create an Express application
const app = express();

// Define the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define the /students endpoint
app.get('/students', async (req, res) => {
  const dbFile = process.argv[2]; // Get the database file from arguments
  if (!dbFile) {
    res.status(500).send('Error: Missing database file');
    return;
  }

  try {
    const report = await countStudents(dbFile);
    res.send(`This is the list of our students\n${report}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Server listens on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app variable
module.exports = app;

