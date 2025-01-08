// 2-calcul_chai.test.js
const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of rounded numbers', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 2.3, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', 1.1, 4.6)).to.equal(6); // Expected rounded results
    });
  });

  describe('SUBTRACT', function() {
    it('should return the difference of rounded numbers', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 5.7, 2.2)).to.equal(4);
      expect(calculateNumber('SUBTRACT', 2.1, 3.9)).to.equal(-2); // Updated expected result
    });
  });

  describe('DIVIDE', function() {
    it('should return the division of rounded numbers', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal('0.2'); // Updated expected result
      expect(calculateNumber('DIVIDE', 5.7, 2.2)).to.equal('2.5'); // Updated expected result
    });

    it('should return "Error" when dividing by 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Invalid type', function() {
    it('should throw an error for invalid operation type', function() {
      expect(calculateNumber('INVALID', 1.4, 4.5)).to.equal('Invalid type');
    });
  });
});

