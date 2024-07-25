export default class HolbertonClass {
  constructor(size, location) {
    this._size = this._validateNumber(size, 'Size');
    this._location = this._validateString(location, 'Location');
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Validation method for numbers
  _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  // Validation method for strings
  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  // Cast to Number
  valueOf() {
    return this._size;
  }

  // Cast to String
  toString() {
    return this._location;
  }
}

