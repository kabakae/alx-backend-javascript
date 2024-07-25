export default class Building {
  constructor(sqft) {
    this._sqft = this._validateNumber(sqft, 'Square footage');
    if (new.target === Building) {
      throw new Error('Cannot instantiate abstract class Building directly');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Method to validate number
  _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  // Method to ensure subclasses implement evacuationWarningMessage
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

