import getListStudents from './0-get_list_students';

describe('getListStudents', () => {
  test('returns the correct array of student objects', () => {
    const expectedStudents = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];
    expect(getListStudents()).toEqual(expectedStudents);
  });
});

