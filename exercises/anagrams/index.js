// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// word;

// function buildCharMap(string) {
//   const hash = {};
//   string = string.replace(/[^\w]/g, "").toLowerCase();
//   for (var i = 0; i < string.length; i++) {
//     if (hash[string[i]]) {
//       hash[string[i]] += 1;
//     } else {
//       hash[string[i]] = 1
//     }
//   }
//   return hash;
// }

// My Solution with initial hints by Stephen
// function anagrams(stringA, stringB) {
//   const stringAMap = buildCharMap(stringA);
//   const stringBMap = buildCharMap(stringB);
//
//   // Need to iterate over the largest hash or else you will miss leters and
//   // get false positives
//   if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) {
//     return false;
//   }
//
//   // Check each hash to each other return if any of them does not match
//   for (var key in stringAMap) {
//     if (stringAMap.hasOwnProperty(key)) {
//       if (stringAMap[key] !== stringBMap[key]) {
//         return false;
//       }
//     }
//   }
//
//   return true;
// }

// Stephen's Alternate Solution with Array methods
function cleanString (string) {
  return string.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;
