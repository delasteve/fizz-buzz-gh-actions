function evaluate(number) {
  if (number === 5) {
    return 'Buzz';
  }

  if (number % 3 === 0) {
    return 'Fizz';
  }

  return `${number}`;
}

module.exports = {
  evaluate,
};
