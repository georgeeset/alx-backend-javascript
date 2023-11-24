const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {

  describe('type == "DIVIDE"', () => {
    const type = "DIVIDE";

    it('positive numbers', () => {
      assert.strictEqual(calculateNumber(type, 6.0, 2.0), 3.0);
    });

    it('numbers with different signs', () => {
      assert.strictEqual(calculateNumber(type, -9.0, 2.0), -4.5);
    });

    it('numbers with different signs (alternate)', () => {
      assert.strictEqual(calculateNumber(type, 15.0, -2.0), -7.5);
    });

    it('negative numbers', () => {
      assert.strictEqual(calculateNumber(type, -9.0, -2.0), 4.5);
    });

    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber(type, 3.0, 3.0), 1);
    });

    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber(type, -9.0, -9.0), 1);
    });

    it('equal rounded up numbers', () => {
      assert.strictEqual(calculateNumber(type, 5.6, 3.0), 2);
    });

    it('equal rounded down numbers', () => {
      assert.strictEqual(calculateNumber(type, 2.4, 2.0), 1);
    });

    it('negative number and 0', () => {
      assert.strictEqual(calculateNumber(type, -5.0, 0), 'Error');
    });

    it('negative number and number rounded down to zero', () => {
      assert.strictEqual(calculateNumber(type, -5.0, 0.2), 'Error');
    });

    it('negative number and number rounded up to zero', () => {
      assert.strictEqual(calculateNumber(type, -5.0, -0.2), 'Error');
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber(type, 0.0, 0.0), 'Error');
    });

    it('0 and positive number', () => {
      assert.strictEqual(calculateNumber(type, 0.0, 5.0), 0);
    });

    it('0 and negative number', () => {
      assert.strictEqual(calculateNumber(type, 0.0, -5.0), -0);
    });

    it('positive number and 0', () => {
      assert.strictEqual(calculateNumber(type, 5.0, 0), 'Error');
    });

    it('positive number and number rounded down to 0', () => {
      assert.strictEqual(calculateNumber(type, 5.0, 0.2), 'Error');
    });

    it('positive number and number rounded up to 0', () => {
      assert.strictEqual(calculateNumber(type, 5.0, -0.2), 'Error');
    });

  });

  describe('type == "SUM"', () => {
    const type = "SUM";
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber(type, 7.0, 7.0), 14);
    });

    it('equal positive numbers (alternate)', () => {
      assert.strictEqual(calculateNumber(type, 8.3, 7.8), 16);
    });

    it('negative and positive numbers', () => {
        assert.strictEqual(calculateNumber(type, -3.0, 3.0), 0);
    });

    it('positive and negative numbers', () => {
      assert.strictEqual(calculateNumber(type, 3.0, -3.0), 0);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber(type, 0.0, 0.0), 0);
    });

    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber(type, -1.0, -1.0), -2);
    });

    it('equal negative numbers (alternate)', () => {
      assert.strictEqual(calculateNumber(type, -3.3, -2.8), -6);
    });
  });

  describe('type == "SUBTRACT"', () => {
    const type = "SUBTRACT";

    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber(type, 7.0, 7.0), 0);
    });

    it('equal positive numbers (alternate)', () => {
      assert.strictEqual(calculateNumber(type, 4.3, 3.8), 0);
    });

    it('negative and positive numbers', () => {
        assert.strictEqual(calculateNumber(type, -2.0, 2.0), -4.0);
    });

    it('positive and negative numbers', () => {
      assert.strictEqual(calculateNumber(type, 4.0, -2.0), 6.0);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber(type, 0.0, 0.0), 0);
    });

    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber(type, -1.0, -1.0), 0);
    });

    it('equal negative numbers (alternate)', () => {
      assert.strictEqual(calculateNumber(type, -7.3, -6.8), 0);
    });
  });
});
