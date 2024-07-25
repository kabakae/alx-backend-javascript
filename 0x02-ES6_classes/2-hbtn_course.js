export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateName(name);
    this._length = this._validateLength(length);
    this._students = this._validateStudents(students);
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this._validateName(value);
  }

  // Getter and Setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this._validateLength(value);
  }

  // Getter and Setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this._validateStudents(value);
  }

  // Validation methods
  _validateName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }

  _validateLength(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return value;
  }

  _validateStudents(value) {
    if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return value;
  }
}

