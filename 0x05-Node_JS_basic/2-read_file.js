#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines and remove any empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Check if there are any students (header should be ignored)
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Initialize counters and collections for fields
    const studentsByField = {};
    let totalStudents = 0;

    // Loop over the data, starting from the second line (skipping the header)
    for (let i = 1; i < lines.length; i += 1) {
      const studentData = lines[i].split(',');

      if (studentData.length < 4) {
        // Skip invalid/incomplete lines
        continue;
      }

      const firstName = studentData[0].trim();
      const field = studentData[3].trim();

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstName);
      totalStudents += 1;
    }

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students per field
    Object.entries(studentsByField).forEach(([field, students]) => {
      console.log(
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
      );
    });
  } catch (err) {
    // If the file cannot be read, throw the required error message
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
