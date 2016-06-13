//For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10. Given 3 ints, a b c, return the sum of their rounded values. To avoid code repetition, write a separate helper "def round10(num):" and call it 3 times. Write the helper entirely below and at the same indent level as round_sum().


function roundSum(x, y, z) {
    var a = round10(x),
        b = round10(y),
        c = round10(z);

    return a + b + c;
};

function round10(x) {
    return Math.round(x / 10) * 10;
}


console.log(roundSum(16, 17, 18));
console.log(roundSum(12, 13, 14));
console.log(roundSum(6, 4, 4));
