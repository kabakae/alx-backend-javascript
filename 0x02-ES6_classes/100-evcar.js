import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(); 
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }
  cloneCar() {
    return new Car();
  }
}
export default EVCar;
