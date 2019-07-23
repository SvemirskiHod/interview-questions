// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const generateHash = (str) => {
  const hash = {};
  for (var i = 0; i < str.length; i++) {
    hash[str[i]] ? hash[str[i]] += 1 : hash[str[i]] = 1;
  }
  return hash;
};

// My initial solution - A little dank
function maxChar(str) {
  const hash = generateHash(str);
  let max = 0;
  let char = '';
  // Find max value and associated char
  for (var property in hash) {
    if (hash.hasOwnProperty(property)) {
      if (hash[property] > max) {
        max = hash[property];
        char = property;
      }
    }
  }
  return char;
}

module.exports = maxChar;
