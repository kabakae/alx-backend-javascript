import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(); // Call the parent class constructor if needed
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  // Override the cloneCar method
  cloneCar() {
    // Return a new instance of Car
    return new Car();
  }
}

export default EVCar;

