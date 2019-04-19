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

function steps(n, row = 0, stair = '') {
    if (n === row) { // at the last row
        return;
    }

    if (n === stair.length) { // hit the end of a row
        console.log(stair);
        steps(n, row + 1); // go to the next row
        return;
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }

    steps(n, row, stair);

}

module.exports = steps;

// function steps(n) {
//     // let stepsArr = [];
//     let stepChar = '#';
//     for (let index = 1; index <= n; index++) {
//         let step = stepChar.repeat(index) + ' '.repeat(n - index);
//         // // stepsArr.push([step])
//         console.log(step)
//     }

//     // stepsArr.forEach(element => {
//     //     console.log(element.toString());
//     // });

// }
