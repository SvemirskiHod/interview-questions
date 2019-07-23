// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

// Solution 1.1
function palindrome(str) {
  let reversed = '';
  for (var i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed === str;
}

// Solution 1.2
function palindrome(str) {
  let reversed = '';
  for (char of str) {
    reversed = char + reversed
  }
  return reversed === str;
}

// Solution 1.3
function palindrome(str) {
  const reversed = str.split('').reduce((rev, char) => char + rev, '');
  return reversed === str;
}

// Solution Alternate - I did it first but then he did it too
function palindrome(str) {
  return str.split('').every((char, index, array) => {
    return char === array[array.length - index - 1];
  })
}

// More efficient solution - mine
function palindrome(str) {
  let is_palindrome = true;
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      is_palindrome = false;
      break;
    }
  }
  return is_palindrome;
}

module.exports = palindrome;
