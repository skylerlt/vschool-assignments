var getFraction = function (decimal) {
    if (decimal === Math.floor(decimal)) {
        return decimal;
    } else {
        for (var i = 0; i <= 1000; i++) {
            for (var j = 0; j <= 1000; j++) {
                if ((i / j) === decimal) {
                    if (i > j) {
                        var whole = Math.floor(i / j).toString();
                        var part = " " + (i % j) + "/" + j;
                        var compund = whole + part;
                        return compund
                    } else {
                        var fraction = i + "/" + j;
                        return fraction;
                    }
                }
            }
        }
    }
}

console.log(getFraction(0.5));
console.log(getFraction(0.25));
console.log(getFraction(0.2));
console.log(getFraction(0.1));
console.log(getFraction(0.3));
console.log(getFraction(0.125));
console.log(getFraction(0.75));
console.log(getFraction(1));
console.log(getFraction(1.5));
console.log(getFraction(2.5));
console.log(getFraction(1.75));
console.log(getFraction(1.166666666666666667));
