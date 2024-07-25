import HolbertonCourse from './2-hbtn_course';

test('HolbertonCourse', () => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    expect(course.name).toBe('ES6');
    expect(course.length).toBe(1);
    expect(course.students).toEqual(['Bob', 'Jane']);
    course.name = 'JavaScript';
    expect(course.name).toBe('JavaScript');
    course.length = 2;
    expect(course.length).toBe(2);
    course.students = ['Alice', 'Bob'];
    expect(course.students).toEqual(['Alice', 'Bob']);
});

