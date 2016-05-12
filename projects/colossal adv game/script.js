var ask = require('readline-sync');
console.log("Good day, my name is Odysseus.  Would you like to join me on my journey home to Greece? ");
var firstName = ask.question('What is your first name? ');
var backPack = [];

console.log("It's nice to meet you " + firstName + ".  Shall we start on our journey?  To start you need to decide to walk. ");

function walking() {
    var walk = ask.question("If you want to walk, type in 'W'.  If you wish to put your tail between your legs and run like a dog, type in 'flee'. ");
    if (walk === "w") {
        whichBaddie();
    } else if (walk === "flee") {
        console.log("Thanks for nothing you cowardly cur!  May Hades find you quickly.")
    } else {
        console.log("That is not a valid response.  Please try again. ")
        walking();
    };
};
walking();

function whichBaddie() {
    var baddie = Math.floor((Math.random() * 4) + 1);
    if (baddie === 1) {
        console.log("Look out, " + firstName + ", we've encountered a cyclops!  What shall we do? ");
        fightOrFlight();
    } else if (baddie === 2) {
        console.log("Careful, " + firstName + ", we've run across the witch Circe!  What shall we do? ");
        fightOrFlight();
    } else if (baddie === 3) {
        console.log("Proceed with caution, " + firstName + ", we can hear the song of the sirens!  What shall we do? ");
        fightOrFlight();
    } else {
        console.log("Look at that, " + firstName + " you've found a treasure chest.  What should you do? ")
        treasureChest();
    };
};

function fightOrFlight() {
    var shallWe = ask.question("Do you decide to fight or flee?  Type 'attack' to fight, or 'run' to flee. ");
    if (shallWe === 'attack') {
        fighting();
    } else if (shallWe === 'run') {
        fleeing();
    } else if (shallWe === 'print') {
        console.log(backPack);
        fightOrFlight();
    } else {
        console.log("I'm sorry, I didn't quite get that...")
        fightOrFlight();
    }
};

function fighting() {
    var fight = Math.floor((Math.random() * 10) + 1);
    if (fight > 4) {
        console.log("You struck your foe, but it rises again!")
        enemyStrike();
    } else if (fight === 3) {
        finalWin()
    } else {
        console.log("You fought and fell with honor.  May you find peace on the Elysian Fields. ")
        finalLoss()
    };
};

function fleeing() {
    var flee = Math.floor((Math.random() * 3) + 1);
    if (flee === 1) {
        console.log("Wise choice to flee.  You successfully evaded your foe and survived to fight another day. ");
        rightOrLeft();
    } else if (flee === 2) {
        finalWin()
    } else {
        console.log("Your foe was more persistant than you thought.  It pursued you, caught and devoured you.  Hades collects your soul. ")
        finalLoss()
    }
};

function enemyStrike() {
    var strike = ask.question("Your foe advances " + firstName + ", what should we do? Enter 'attack' to fight some more, or 'run' to flee. ")
    if (strike === 'attack') {
        finish();
    } else if (strike === 'run') {
        fleeing();
    } else if (strike === 'print') {
        console.log(backPack);
        enemyStrike()
    } else {
        console.log("I'm sorry, I didn't quite get that...")
        enemyStrike();
    };
};

function finish() {
    var damage = Math.floor((Math.random() * 10) + 1);
    if (damage < 7) {
        console.log("You fought valiantly and overcame your foe.  May your luck continue on our journey together. ")
        collectItem();
    } else if (damage === 6) {
        finalWin
    } else if (damage === 5) {
        finalLoss()
    } else {
        console.log("You fought well, but your enemy was better.  Say hello to Hades for me. ")
        finalLoss()
    }
};


function rightOrLeft() {
    var rightLeft = ask.question("We have found a fork in the path.  One path veers left, the other right.  Which direction should we go " + firstName + "?  Enter 'right' or 'left' to choose. ")
    if (rightLeft === 'right') {
        rightHere();
    } else if (rightLeft === 'left') {
        leftHere();
    } else if (rightLeft === 'print') {
        console.log(backPack);
        rightOrLeft();
    } else {
        console.log("I'm sorry, I didn't get that. ")
        rightOrLeft();
    }
};

function rightHere() {
    var right = Math.floor((Math.random() * 20) + 1);
    if (right >= 18) {
        finalWin()
    } else if (right === 16) {
        finalLoss();
    } else {
        whichBaddie();
    }
};

function leftHere() {
    var left = Math.floor((Math.random() * 20) + 1);
    if (left >= 18) {
        finalWin();
    } else {
        whichBaddie();
    }
}

function treasureChest() {
    var treasure = ask.question("If you would like to open it, enter 'open', otherwise enter 'leave' and we'll continue on. ");
    if (treasure === 'open') {
        openIt();
    } else if (treasure === 'leave') {
        whichBaddie();
    } else if (treasure === 'print') {
        console.log(backPack);
        treasureChest();
    } else {
        console.log("I'm sorry, I didn't quite get that... ")
        treasureChest();
    }
};

function openIt() {
    var open = Math.floor((Math.random() * 50) + 1);
    if (open >= 40) {
        console.log("I can't believe it " + firstName + ", you found the breastplate of Hercules!  Don't lose it. ")
        backPack.push("Breastplate")
        whichBaddie();
    } else if (open >= 10 && open < 40) {
        console.log("Do you feel stronger " + firstName + "?  You just gained 50 HP.  Well done. ")
        backPack.push('50 HP');
        whichBaddie();
    } else {
        console.log("I'm sorry " + firstName + " but it appears the chest is empty. ")
        whichBaddie()
    }
};

function collectItem() {
    console.log("After defeating your foe you.. ")
    var item = Math.floor((Math.random() * 50) + 1);
    if (item < 45) {
        console.log("Look at that " + firstName + " you have acquired the lost spear of Achilles!  Keep it close. ")
        backPack.push("Spear");
        whichBaddie();
    } else if (item <= 44 && item > 15) {
        console.log("You found a potion.  No saying what it does, but you might want to hold on to it just in case...")
        backPack.push("Potion")
        whichBaddie()
    } else {
        console.log("You were awarded 50 HP.  Well done!")
        backPack.push("50 HP");
        whichBaddie();
    };
};

function finalWin() {
    console.log("You have successfully reached the end of our quest.  We have made it safely back to Greece.  Here is what you earned. ")
    console.log(backPack)
};

function finalLoss() {
    console.log("You were unsuccessful in your quest and shall never see your home again.  Enjoy the afterlife.  These are the items your corpse littered on the ground when you fell. ")
    console.log(backPack);
};