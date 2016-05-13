function isCaps(letter) {
    return letter === letter.toUpperCase();
}

function antiCaps(letter) {
    var string = "";
    for (i = 0; i < letter.length; i++) {
        if (isCaps(letter[i]) === true) {
            string += letter[i].toLowerCase();
        } else {
            string += letter[i].toUpperCase();
        }
    }
    console.log(string);
}

antiCaps("HeLLLLLLllllllooo");