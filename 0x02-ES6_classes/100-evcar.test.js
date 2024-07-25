import EVCar from '../100-evcar.js';
import Car from '../10-car.js';

describe('EVCar', () => {
  it('should correctly instantiate an EVCar', () => {
    const ec1 = new EVCar('Tesla', 'Turbo', 'Red', '250');
    expect(ec1).toBeInstanceOf(EVCar);
    expect(ec1._brand).toBe('Tesla');
    expect(ec1._motor).toBe('Turbo');
    expect(ec1._color).toBe('Red');
    expect(ec1._range).toBe('250');
  });

  it('should correctly clone an EVCar to a Car instance', () => {
    const ec1 = new EVCar('Tesla', 'Turbo', 'Red', '250');
    const ec2 = ec1.cloneCar();
    expect(ec2).toBeInstanceOf(Car);
    expect(ec2._brand).toBe('Tesla');
    expect(ec2._motor).toBe('Turbo');
    expect(ec2._color).toBe('Red');
  });
});

