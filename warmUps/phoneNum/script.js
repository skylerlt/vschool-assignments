//  Write a function that takes a phone number with only 7, 10, or 11 characters in length, and contains both numbers and letters, and returns the phone number into a digit-only phone number

var toDigits = function (string) {
    var phoneAlpha = simplifyPhone(string);
    var phoneDigit = replaceLetters(phoneAlpha);

    return formatPhone(phoneDigit);

}

var simplifyPhone = function (string) {
    return string.replace(/\W/g, "");
}

var replaceLetters = function (string) {
    string = string.replace(/[abc]/ig, "2");
    string = string.replace(/[def]/ig, "3");
    string = string.replace(/[ghi]/ig, "4");
    string = string.replace(/[jkl]/ig, "5");
    string = string.replace(/[mno]/ig, "6");
    string = string.replace(/[pqrs]/ig, "7");
    string = string.replace(/[tuv]/ig, "8");
    string = string.replace(/[wxyz]/ig, "9");
    return string;
}

var formatPhone = function (phoneDigits) {
    var length = phoneDigits.length;
    if (length === 7) {
        return phoneDigits.slice(0, 3) + "-" + phoneDigits.slice(3);

    } else if (length === 10) {
        return "(" + phoneDigits.slice(0, 3) + ") " + phoneDigits.slice(3, 6) + "-" + phoneDigits.slice(6);

    } else if (length === 11) {
        return phoneDigits.slice(0, 1) + " (" + phoneDigits.slice(1, 4) + ") " + phoneDigits.slice(4, 7) + "-" + phoneDigits.slice(7);
    } else {
        return "Your phone number is not a valid length."
    }
}

console.log(toDigits("1-800-contact"))
console.log(toDigits("(800)-contact"))
console.log(toDigits("contact"))
console.log(toDigits("1-800-CONTACT"))
console.log(toDigits("(800) CONT-ACT"))
console.log(toDigits("CONTACT"))
console.log(toDigits("720-222-aadd"))
console.log(toDigits("801-buy-food"))
console.log(toDigits("the-big-shop"))
