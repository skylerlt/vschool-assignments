// function array123(array) {
//     var string = array.join("");
//     if (string.indexOf("123") !== -1) {
//         return true;
//     } else {
//         return false;
//     }
// }

function array123(array) {
    var string = array.join("");
    return string.indexOf("123") !== -1
}

console.log(array123([1, 1, 2, 3, 1])); // true  
console.log(array123([1, 1, 2, 4, 1])); // false  
console.log(array123([1, 1, 2, 1, 2, 3])); // true)