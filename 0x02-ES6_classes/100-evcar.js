import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Initialize the parent Car class
    this._range = range; // Initialize the range specific to EVCar
  }

  // Override cloneCar method
  cloneCar() {
    // Create a new Car instance with the same attributes as the current EVCar instance
    const car = new Car(this._brand, this._motor, this._color);
    return car;
  }
}

