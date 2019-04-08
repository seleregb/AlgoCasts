// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // let reversed = '';

    // for (const char of str) {
    //     reversed = char + reversed;
    // }
    // return reversed;
    return str.split('').reduce((reversed, current) =>  current + reversed , '');
}

module.exports = reverse;
