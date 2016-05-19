function countHi(string) {
    var array = string.split("hi");
    return array.length - 1;
}

console.log(countHi('abc hi ho')) // 1  
console.log(countHi('ABChi hi')) // 2  
console.log(countHi('hihi')) // 2