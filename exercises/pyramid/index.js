// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/**
 * recursive solution
 * @param {number} n
 */
function pyramid(n, row = 0, level = "") {
  if (n === row) {
    // at the last row
    return;
  }

  if (level.length === 2 * n - 1) {
    // hit the end of a row
    console.log(level);
    pyramid(n, row + 1); // go to the next row
    return;
  }

  const midpoint = Math.floor((2 * n - 1) / 2);

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    level += "#";
  } else {
    level += " ";
  }

  pyramid(n, row, level);
}

module.exports = pyramid;

/**
 * @param {number} n
 * iterative solution
 */
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = "";
//     for (let column = 0; column < 2 * n - 1; column++) {
//       // make sure that the current column is within the bounds of the midpoint
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }

//     console.log(level);
//   }
// }
