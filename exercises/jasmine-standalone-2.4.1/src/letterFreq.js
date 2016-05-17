function letterFrequency(phrase) {
    var letterFrequency = {};
    for (var i = 0; i < phrase.length; i++) {
        var letter = phrase[i];
        if (!letterFrequency.hasOwnProperty(letter)) {
            letterFrequency[letter] = 1
        } else {
            letterFrequency[letter] += 1;
        }
    }
    return letterFrequency;
};

function displayLetterFrequency(letterFreqObj) {
    for (var key in letterFreqObj) {
        console.log(key + ": " + letterFreqObj[key]);
    }
}

var freqObj = letterFrequency("slimy smelly solution");
displayLetterFrequency(freqObj);