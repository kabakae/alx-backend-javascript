import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const databasePath = process.argv[2];

    try {
      const students = await readDatabase(databasePath);
      const response = ['This is the list of our students'];

      Object.keys(students)
        .sort((a, b) => a.localeCompare(b))
        .forEach((field) => {
          response.push(
            `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`
          );
        });

      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const databasePath = process.argv[2];
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(databasePath);
      const fieldStudents = students[major] || [];
      res.status(200).send(`List: ${fieldStudents.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;

