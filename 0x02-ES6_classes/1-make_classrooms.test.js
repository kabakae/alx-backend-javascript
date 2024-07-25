import initializeRooms from './1-make_classrooms.js';
import ClassRoom from './0-classroom.js';

test('initializeRooms should return an array of ClassRoom objects with sizes 19, 20, and 34', () => {
  const rooms = initializeRooms();
  expect(rooms.length).toBe(3);
  expect(rooms[0]).toBeInstanceOf(ClassRoom);
  expect(rooms[0]._maxStudentsSize).toBe(19);
  expect(rooms[1]._maxStudentsSize).toBe(20);
  expect(rooms[2]._maxStudentsSize).toBe(34);
});
