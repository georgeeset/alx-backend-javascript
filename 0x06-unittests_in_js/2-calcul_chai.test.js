const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    const type = "SUM"
    it('equal positive numbers', () => {
      expect(calculateNumber(type, 5.0, 5.0)).to.equal(10);
    });

    it('equal positive numbers (alternate)', () => {
      expect(calculateNumber(type, 4.3, 3.8)).to.equal(8);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber(type, 2.0, -2.0)).to.equal(0);
    });

    it('0 and 0', () => {
      expect(calculateNumber(type, 0.0, 0.0)).to.equal(0);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber(type, -4.0, -4.0)).to.equal(-8);
    });

    it('equal negative numbers (alternate)', () => {
      expect(calculateNumber(type, -5.3, -4.8)).to.equal(-10);
    });

    it('negative and positive numbers', () => {
      expect(calculateNumber(type, -3.0, 3.0)).to.equal(0);
    });
  });

  

  describe('type == "DIVIDE"', () => {
    const type = "DIVIDE"
    it('positive numbers', () => {
      expect(calculateNumber(type, 8.0, 2.0)).to.equal(4.0);
    });

    it('numbers with different signs', () => {
      expect(calculateNumber(type, -8.0, 2.0)).to.equal(-4.0);
    });

    it('numbers with different signs (alternate)', () => {
      expect(calculateNumber(type, 7.0, -2.0)).to.equal(-3.5);
    });

    it('negative numbers', () => {
      expect(calculateNumber(type, -8.0, -2.0)).to.equal(4.0);
    });

    it('equal positive numbers', () => {
      expect(calculateNumber(type, 2.0, 2.0)).to.equal(1);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber(type, -2.0, -2.0)).to.equal(1);
    });

    it('equal rounded up numbers', () => {
      expect(calculateNumber(type, 2.6, 3.0)).to.equal(1);
    });

    it('equal rounded down numbers', () => {
      expect(calculateNumber(type, 2.4, 2.0)).to.equal(1);
    });

    it('0 and positive number', () => {
      expect(calculateNumber(type, 0.0, 5.0)).to.equal(0);
    });

    it('0 and negative number', () => {
      expect(calculateNumber(type, 0.0, -5.0)).to.equal(-0);
    });

    it('positive number and 0', () => {
      expect(calculateNumber(type, 5.0, 0)).to.equal('Error');
    });

    it('positive number and number rounded down to 0', () => {
      expect(calculateNumber(type, 5.0, 0.2)).to.equal('Error');
    });

    it('positive number and number rounded up to 0', () => {
      expect(calculateNumber(type, 5.0, -0.2)).to.equal('Error');
    });

    it('negative number and 0', () => {
      expect(calculateNumber(type, -5.0, 0)).to.equal('Error');
    });

    it('negative number and number rounded down to zero', () => {
      expect(calculateNumber(type, -5.0, 0.2)).to.equal('Error');
    });

    it('negative number and number rounded up to zero', () => {
      expect(calculateNumber(type, -5.0, -0.2)).to.equal('Error');
    });

    it('0 and 0', () => {
      expect(calculateNumber(type, 0.0, 0.0)).to.equal('Error');
    });
  });


describe('type == "SUBTRACT"', () => {
    const type = "SUBTRACT"
    it('equal positive numbers', () => {
      expect(calculateNumber(type, 2.0, 2.0)).to.equal(0);
    });

    it('equal positive numbers (alternate)', () => {
      expect(calculateNumber(type, 2.3, 1.8)).to.equal(0);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber(type, -2.0, -2.0)).to.equal(0);
    });

    it('equal negative numbers (alternate)', () => {
      expect(calculateNumber(type, -2.3, -1.8)).to.equal(0);
    });

    it('negative and positive numbers', () => {
      expect(calculateNumber(type, -2.0, 2.0)).to.equal(-4.0);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber(type, 2.0, -2.0)).to.equal(4.0);
    });

    it('0 and 0', () => {
      expect(calculateNumber(type, 0.0, 0.0)).to.equal(0);
    });
  });
});