function calculateNumber(type, a, b) {
  // Round the input numbers
  const num1 = Math.round(a);
  const num2 = Math.round(b);

  // Perform operations based on the type
  if (type === 'SUM') {
    return num1 + num2;
  } else if (type === 'SUBTRACT') {
    return num1 - num2;
  } else if (type === 'DIVIDE') {
    // Check for division by zero
    if (num2 === 0) {
      return 'Error';
    }
    return num1 / num2;
  } else {
    throw new Error('Invalid operation type');
  }
}

module.exports = calculateNumber;

