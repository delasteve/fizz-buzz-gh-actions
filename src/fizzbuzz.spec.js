const assert = require('assert');

describe('fizz buzz', () => {
  describe('#evaluate', () => {
    it('should return the number 1 when given 1', () => {
      const fizzbuzz = require('./fizzbuzz');

      const actual = fizzbuzz.evaluate(1);

      assert.equal(actual, '1');
    });
  });
});
