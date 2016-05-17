function fixTeen(n) {
    if (n > 12 && n <= 19) {
        if (n === 15 || n === 16) {
            n = n;
        } else {
            n = 0
        }
    }
    return n
}

function noTeenSum(a, b, c) {
    a = fixTeen(a);
    b = fixTeen(b);
    c = fixTeen(c);

    var myTotal = a + b + c;
    console.log(myTotal)

}

noTeenSum(1, 2, 3);
noTeenSum(2, 13, 1);
noTeenSum(2, 1, 14);
noTeenSum(2, 15, 14);