// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// methods: .toUpperCase() / str.slice(startIndex, endIndex)

// My solution with Stephen's Guidance
function capitalize(str) {
  const baseArray = str.split(' ');
  const arrayCapitalized = baseArray.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return arrayCapitalized.join(' ');
}

// Stephen Solution 1
function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

// Stephen Solution 2
function capitalize(str) {
  let result = ''; // alternative: initiate the result variable with the first letter capitalized
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ' || i === 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;
