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

function steps(n) {
    // let stepsArr = [];
    let stepChar = '#';
    for (let index = 1; index <= n; index++) {
        let step = stepChar.repeat(index) + ' '.repeat(n - index);
        // // stepsArr.push([step])
        console.log(step)
    }

    // stepsArr.forEach(element => {
    //     console.log(element.toString());
    // });

}

module.exports = steps;
