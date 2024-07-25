import ClassRoom from './0-classroom';
import initializeRooms from './1-make_classrooms';

describe('initializeRooms', () => {
  it('should create an array of ClassRoom instances with the correct sizes', () => {
    expect.assertions(6); // Adjust based on the number of assertions
    
    const rooms = initializeRooms();

    expect(rooms).toHaveLength(3); // Check the length of the array
    expect(rooms[0]).toBeInstanceOf(ClassRoom); // Check instances
    expect(rooms[1]).toBeInstanceOf(ClassRoom);
    expect(rooms[2]).toBeInstanceOf(ClassRoom);

    expect(rooms[0].size).toBe(19); // Check the size attribute
    expect(rooms[1].size).toBe(20);
    expect(rooms[2].size).toBe(34);
  });
});
