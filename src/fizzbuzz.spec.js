const assert = require('assert');
const fizzbuzz = require('./fizzbuzz');

describe('fizz buzz', () => {
  describe('#evaluate', () => {
    it('should return the number 1 when given 1', () => {
      const actual = fizzbuzz.evaluate(1);

      assert.equal(actual, '1');
    });
    it('should return the number 2 when given 2', () => {
      const actual = fizzbuzz.evaluate(2);

      assert.equal(actual, '2');
    });

    it('should return "Fizz" when given 3', () => {
      const actual = fizzbuzz.evaluate(3);

      assert.equal(actual, 'Fizz');
    });

    it('should return "Buzz" when given 5', () => {
      const actual = fizzbuzz.evaluate(5);

      assert.equal(actual, 'Buzz');
    });

    it('should return "Fizz" when given 6', () => {
      const actual = fizzbuzz.evaluate(6);

      assert.equal(actual, 'Fizz');
    });

    it('should return "Buzz" when given 10', () => {
      const actual = fizzbuzz.evaluate(10);

      assert.equal(actual, 'Buzz');
    });

    it('should return "FizzBuzz" when given 15', () => {
      const actual = fizzbuzz.evaluate(15);

      assert.equal(actual, 'FizzBuzz');
    });

    it('should return "FizzBuzz" when given 30', () => {
      const actual = fizzbuzz.evaluate(30);

      assert.equal(actual, 'FizzBuzz');
    });
  });
});
