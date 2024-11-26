const fs = require('fs').promises;

/**
 * Reads the database file asynchronously and logs the number of students.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise} - A Promise that resolves after processing the file.
 * @throws {Error} - Throws an error if the file cannot be loaded.
 */
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const headers = lines[0].split(',');
    const students = lines.slice(1);

    // Number of students
    console.log(`Number of students: ${students.length}`);

    const fields = {};

    students.forEach((line) => {
      const student = line.split(',');
      const field = student[headers.indexOf('field')];
      const firstname = student[headers.indexOf('firstname')];

      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    // Log the number of students in each field
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

  } catch (err) {
    console.error(err.message);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

