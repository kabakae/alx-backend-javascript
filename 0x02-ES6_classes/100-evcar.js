import Car from './10-car.js';

const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent constructor
    this[_range] = range;
  }

  // Getter for range
  get range() {
    return this[_range];
  }

  // Override cloneCar method to return an instance of Car
  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}
