//input
var input = 'bookkeeper larry';
var noDupes = [];
var extras = [];

// output
// No duplicates: 'bokepr lay'
// The Misfits: 'okeerr'

for (var i = 0; i < input.length; i++)
    if (noDupes.indexOf(input[i]) > -1) {
        extras.push(input[i]);
    } else {
        noDupes.push(input[i]);
    };

console.log(noDupes.join(''));
console.log(extras.join(''));