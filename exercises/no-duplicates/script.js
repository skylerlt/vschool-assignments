//input
var input = 'bookkeeper larry';

var singles = [];
var doubles = [];

for (i = 0; i < input.length; i++) {
    if (singles.indexOf(input[i]) > -1) {
        doubles.push(input[i])
    } else {
        singles.push(input[i])
    }
};

console.log(singles.join(" "));
console.log(doubles.join(" "));