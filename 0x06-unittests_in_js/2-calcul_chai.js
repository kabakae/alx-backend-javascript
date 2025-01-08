// 1-calcul.js
function calculateNumber(type, a, b) {
  // Round both numbers
  a = Math.round(a);
  b = Math.round(b);

  if (type === 'SUM') {
    return a + b;
  } else if (type === 'SUBTRACT') {
    return a - b;
  } else if (type === 'DIVIDE') {
    if (b === 0) {
      return 'Error';
    } else {
      return (a / b).toFixed(1); // Rounding the division result to one decimal place
    }
  } else {
    return 'Invalid type'; // In case an invalid type is passed
  }
}

module.exports = calculateNumber;


