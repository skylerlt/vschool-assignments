function closeFar(a, b, c) {
    var bIsCloseToA = Math.abs(a - b) < 2,
        cIsCloseToA = Math.abs(a - c) < 2,
        bIsCloseToC = Math.abs(b - c) < 2;
    if (bIsCloseToA) {
        return !cIsCloseToA && !bIsCloseToC;
    } else if (cIsCloseToA) {
        return !bIsCloseToA && !bIsCloseToC;
    }
}

console.log(closeFar(1, 2, 10)) // true
console.log(closeFar(1, 2, 3)) // false
console.log(closeFar(4, 1, 3)) // true