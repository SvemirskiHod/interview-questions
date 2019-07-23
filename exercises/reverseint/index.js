// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// My solution - Ternary in the for loop
function reverseInt(n) {
  const string = String(n);
  let reversed = '';
  // NOTE: can reverse a string many number of ways
  for (var i = 0; i < string.length; i++) {
    reversed = string[i] + reversed;
  }
  console.log(parseInt(reversed));
  if (n < 0) {
    reversed = '-' + reversed;
  }
  return parseInt(reversed);
}

module.exports = reverseInt;
