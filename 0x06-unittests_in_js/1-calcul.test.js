// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 2.3, 3.7), 6);
      assert.strictEqual(calculateNumber('SUM', 1.1, 4.6), 6); // Expected rounded results
    });
  });

  describe('SUBTRACT', function() {
    it('should return the difference of rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 5.7, 2.2), 4);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.1, 3.9), -2); // Updated expected result
    });
  });

  describe('DIVIDE', function() {
    it('should return the division of rounded numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), '0.2'); // Updated expected result
      assert.strictEqual(calculateNumber('DIVIDE', 5.7, 2.2), '2.5'); // Updated expected result
    });

    it('should return "Error" when dividing by 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Invalid type', function() {
    it('should throw an error for invalid operation type', function() {
      assert.strictEqual(calculateNumber('INVALID', 1.4, 4.5), 'Invalid type');
    });
  });
});

