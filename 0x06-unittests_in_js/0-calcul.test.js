const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.1, 2.0), 3);
  });

  it('rounding down b floating point number', () => {
    assert.strictEqual(calculateNumber(2.0, 2.4), 4);
  });

  it('rounding down a and b floating point number', () => {
    assert.strictEqual(calculateNumber(3.4, 3.4), 6);
  });

  it('rounding down a floating point number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding up floating point numbers', () => {
    assert.strictEqual(calculateNumber(9.6, 1.0), 11);
  });

  it('rounding down floating point numbers with trailing 9', () => {
    assert.strictEqual(calculateNumber(3.499999, 3.499999), 6);
  });

  it('rounding up b floating point numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounding up a and b floating point numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

});