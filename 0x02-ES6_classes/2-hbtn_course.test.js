import HolbertonCourse from './2-hbtn_course.js';

test('HolbertonCourse should create an instance with name, length, and students', () => {
  const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
  expect(course.name).toBe('ES6');
  expect(course.length).toBe(1);
  expect(course.students).toEqual(['Bob', 'Jane']);
});

test('HolbertonCourse should throw an error for invalid name', () => {
  expect(() => new HolbertonCourse(12, 1, ['Bob', 'Jane'])).toThrow(TypeError);
  expect(() => new HolbertonCourse('ES6', 1, ['Bob', 'Jane']).name = 12).toThrow(TypeError);
});

test('HolbertonCourse should throw an error for invalid length', () => {
  expect(() => new HolbertonCourse('ES6', '1', ['Bob', 'Jane'])).toThrow(TypeError);
  expect(() => new HolbertonCourse('ES6', 1, ['Bob', 'Jane']).length = '1').toThrow(TypeError);
});

test('HolbertonCourse should throw an error for invalid students', () => {
  expect(() => new HolbertonCourse('ES6', 1, 'Bob')).toThrow(TypeError);
  expect(() => new HolbertonCourse('ES6', 1, [12, 'Jane'])).toThrow(TypeError);
  expect(() => new HolbertonCourse('ES6', 1, ['Bob', 'Jane']).students = 'Bob').toThrow(TypeError);
});

