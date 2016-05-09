function createEvenArray(highestNum) {
    var evenNum = [];
    for (var i = 2; i <= highestNum; i += 2) {
        evenNum.push(i);
    }
    return evenNum;
};


function addOdds(evensOnlyArray) {
    var oddsOnly = [];
    var finalArray = [];
    for (var i = 0; i < evensOnlyArray.length; i++) {
        oddsOnly.push(evensOnlyArray[i] + 1);
    }
    finalArray = evensOnlyArray.concat(oddsOnly);
    return finalArray;
}

console.log(addOdds(createEvenArray(20)));