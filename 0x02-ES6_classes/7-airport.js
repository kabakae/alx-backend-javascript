export default class Airport {
  constructor(name, code) {
    this._name = this._validateString(name, 'Name');
    this._code = this._validateString(code, 'Code');
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Validation method
  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  // Override toString method to return [object CODE]
  toString() {
    return `[object ${this._code}]`;
  }

  // Override default string representation
  toString() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}

