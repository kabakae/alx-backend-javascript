const EVCar = require('./100-evcar');

test('EVCar class', () => {
  const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
  expect(ec1._brand).toBe('Tesla');
  expect(ec1._motor).toBe('Turbo');
  expect(ec1._color).toBe('Red');
  expect(ec1._range).toBe('250');

  const ec2 = ec1.cloneCar();
  expect(ec2).toBeInstanceOf(EVCar);
});

