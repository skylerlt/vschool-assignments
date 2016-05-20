//function randomPassword(arr, count) {
//    var shuffled = arr.slice(0),
//        i = arr.length,
//        min = i - count,
//        temp, index;
//    while (i-- > min) {
//        index = Math.floor((i + 1) * Math.random());
//        temp = shuffled[index];
//        shuffled[index] = shuffled[i];
//        shuffled[i] = temp;
//    }
//    return shuffled.slice(min);
//};
//
//
//var numbers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '4', '5', '6', '7', '8', '9', '10'];
//console.log(randomPassword(numbers, 4));

function randomPassword(length, characters) {
    var newPassword = "";
    for (var i = 0; i < length; i++) {
        newPassword += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return newPassword;
};

console.log(randomPassword(8, "oargoeiog93405930459@#@$^@#&$^&@$&^"));