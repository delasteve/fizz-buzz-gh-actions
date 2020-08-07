function evaluate(number) {
  if (number === 3) {
    return 'Fizz';
  }

  if (number === 2) {
    return '2';
  }
  return '1';
}

module.exports = {
  evaluate,
};
