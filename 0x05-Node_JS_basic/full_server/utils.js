import fs from 'fs/promises';

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const header = lines.shift().split(',');
    const students = {};

    lines.forEach((line) => {
      const record = line.split(',');
      const field = record[header.length - 1].trim();
      const firstName = record[0].trim();

      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstName);
    });

    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;

