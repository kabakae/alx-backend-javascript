import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Initialize parent class
    this._range = range; // Initialize the range specific to EVCar

    // Define properties with underscore for private attributes
    Object.defineProperties(this, {
      _brand: { value: brand, writable: true },
      _motor: { value: motor, writable: true },
      _color: { value: color, writable: true },
      _range: { value: range, writable: true }
    });
  }

  // Override cloneCar method
  cloneCar() {
    const car = new Car();
    car._brand = this._brand;
    car._motor = this._motor;
    car._color = this._color;
    return car;
  }
}
