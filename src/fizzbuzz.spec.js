const assert = require('assert');

describe('fizz buzz', () => {
  describe('#evaluate', () => {
    it('should return the number 1 when given 1', () => {
      const fizzbuzz = require('./fizzbuzz');

      const actual = fizzbuzz.evaluate(1);

      assert.equal(actual, '1');
    });
    it('should return the number 2 when given 2', () => {
      const fizzbuzz = require('./fizzbuzz');

      const actual = fizzbuzz.evaluate(2);

      assert.equal(actual, '2');
    });
  });
});
