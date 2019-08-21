// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// My solution
function steps(n) {
  for (let i = 1; i <= n; i ++) {
    let string = '#'.repeat(i) + ' '.repeat(n - i);
    console.log(string);
  }
}

// Stephen Initial Solution - Iterative
function steps(n) {
  for (let row = 0; row < n; row++) {
    let string = '';
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        string += '#'
      } else {
        string += ' ';
      }
    }
    console.log(string);
  }
}

// Stephen Solution 2 - Recursion - This seems like overkill
function steps(n, row = 0, stair = '') {
  // Base Case
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' '
  }
  steps(n, row, stair);
}

module.exports = steps;
