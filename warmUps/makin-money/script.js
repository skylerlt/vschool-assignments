function formatMoney(number) {
    var cream = number.toString(),
        digits = cream.length - 2,
        commas = Math.floor(digits / 3),
        indecimal = (digits % 3);
    if (indecimal === 0) {
        indecimal = 3;
        commas--;
    }
    String.prototype.splice = function (start, newSubStr) {
        return this.slice(0, start) + newSubStr + this.slice(start);
    };
    if (digits < 1) {
        var x = 0;
        for (var i = 0; i < (Math.abs(digits) + 1); i++) {
            cream = cream.splice(0, "0");
            x++;
        }
        digits += x;
    }
    cream = cream.splice((digits), ".");
    for (var i = 0; i < commas; i++) {
        cream = cream.splice(indecimal, ",");
        indecimal += 4;
    }
    cream = cream.splice(0, "$")
    return cream;
}

console.log(formatMoney(1));
console.log(formatMoney(12));
console.log(formatMoney(123));
console.log(formatMoney(1234));
console.log(formatMoney(12345));
console.log(formatMoney(123456));
console.log(formatMoney(1234567));
console.log(formatMoney(12345678));
console.log(formatMoney(123456789));
console.log(formatMoney(1234567890));