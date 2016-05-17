'use strict'

//var ask = require('readline-sync');
//console.log("It looks like the inevitable has finally happened.  The bitter cold of Siberia has proven to not be enough for the Communists, and they have chosen to invade the antarctic.  But the penguins aren't going to go down without a fight...");


function Party(partyName) {
    this.name = partyName;
    this.population = 1000000;
}

var communists = new Party("Communist Reds");

var penguins = new Party("Penguin Blacks");

function hit(agressor, attackee) {
    console.log("The " + agressor.name + " sent up a nuke and with some luck, and an extremely detailed GPS targeting system, successfully destroyed their target!");
    var damage = Math.floor((Math.random() * 4) + 1);
    if (damage === 4) {
        attackee.population -= 100000;
        console.log("Looks like the " + attackee.name + " lost about 100000 on that direct hit. ");
    } else if (damage === 3) {
        attackee.population -= 50000;
        console.log("Looks like the " + attackee.name + " lost about 50000 on that direct hit. ");
    } else if (damage === 2) {
        attackee.population -= 25000;
        console.log("Looks like the " + attackee.name + " lost about 25000 on that direct hit. ");
    } else {
        attackee.population -= 10000;
        console.log("Looks like the " + attackee.name + " lost about 10000 on that direct hit. ");
    }
    //    sendNuke();
};

function miss(party) {
    console.log("The " + party.name + " sent up a nuke, and when it came down, it splashed harmelessly into the ocean.  Some suspect sabotage.  Could they have a spy in the ranks?...");
    //    sendNuke();
};


function sendNuke(agressor, attackee) {
    var send = Math.floor((Math.random() * 2) + 1);
    if (send === 1) {
        hit(agressor, attackee);
    } else {
        miss(agressor);
    }
};

function declareVictory(partyA, partyB) {
    if (partyA.population > partyB.population) {
        console.log(partyA.name + " wins!")
    } else {
        console.log(partyB.name + " won!");
    }
}

function startAndFightBattle(partyA, partyB) {
    var begin = Math.floor((Math.random() * 2) + 1);
    var toggleAggressor = null;
    if (begin === 1) {
        sendNuke(partyA, partyB);
        toggleAggressor = true;
    } else {
        sendNuke(partyB, partyA);
        toggleAggressor = false;
    }

    while (partyA.population > 0 && partyB.population > 0) {
        if (toggleAggressor) {
            sendNuke(partyB, partyA);
            toggleAggressor = false;
            console.log('commies', partyA.population);
        } else {
            sendNuke(partyA, partyB);
            toggleAggressor = true;
            console.log('penguins', partyB.population);
        }
    }

    declareVictory(partyA, partyB);
}


function bloodBath(partyA, partyB) {
    //        var doIt = ask.question("Are you ready for this bloodbath to begin?  Enter 'Yes' to begin, or 'No' to avoid the macabre.  ");
    var doIt = Math.floor((Math.random() * 3) + 1);
    if (doIt === 1) {
        startAndFightBattle(partyA, partyB);
    } else if (doIt === 2) {
        console.log("Pathetic!")
    } else {
        console.log("That wasn't a valid response; please try again.");
        bloodBath();
    }
};

bloodBath(communists, penguins);