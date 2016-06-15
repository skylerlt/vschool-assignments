//function backwords(num) {
//    num = num + "";
//    return num.split("").reverse().join("");
//};
//
//console.log(backwords("32243"));

//function palindrome(string) {
//    if (string === string.split("").reverse().join("")) {
//        console.log("You have a palindrome! ")
//    } else {
//        console.log("Wrongo! ")
//    }
//};
//
//palindrome("aba");
//palindrome("abb");
//palindrome("jjrrjj");
//palindrome("kliwoeong");

//function alphabetical(string) {
//    return string.split("").sort().join("");
//}
//
//console.log(alphabetical("skyler"));
//console.log(alphabetical("amanda"));

//function uppercase(str) {
//    var array = str.split(' ');
//    var newArray = [];
//
//    for (var i = 0; i < array.length; i++) {
//        newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
//    }
//    return newArray.join(' ');
//}
//console.log(uppercase("the quick brown fox"));

function vowel_count(str1) {
    var vowelList = 'aeiouAEIOU';
    var vcount = 0;

    for (var i = 0; i < str1.length; i++) {
        if (vowelList.indexOf(str1[i]) !== -1) {
            vcount += 1;
        }

    }
    return vcount;
}
console.log(vowel_count("The quick brown fox"));
