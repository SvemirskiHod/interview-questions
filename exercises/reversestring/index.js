// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
function reverse(str) {
  return str.split('').reverse().join('');
}

// Solution 2
function reverse(str) {
  let reversed = '';
  for (var i = 0; i < str.length; i++) {
    reversed += str[str.length - i - 1];
  }
  return reversed;
}

// Solution 2.1
function reverse(str) {
  let reversed = '';
  for (var i = str.length; i > 0; i--) {
    reversed += str[i - 1];
  }
  return reversed;
}

// Solution 2.2 - Stephen
function reverse(str) {
  let reversed = '';
  for (character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

// Solution 2.3 - Mine/Hybrid
function reverse(str) {
  let reversed = '';
  for (var i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}

// Solution 3
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
