const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  // Getter for brand
  get brand() {
    return this[_brand];
  }

  // Getter for motor
  get motor() {
    return this[_motor];
  }

  // Getter for color
  get color() {
    return this[_color];
  }

  // Method to clone the car
  cloneCar() {
    return new this.constructor(this[_brand], this[_motor], this[_color]);
  }
}

