var ask = require('readline-sync');
console.log("Good day, my name is Odysseus.  Would you like to join me on my journey home to Greece? ");
var firstName = ask.question('What is your first name? ');

console.log("It's nice to meet you " + firstName + ".  Shall we start on our journey?  To start you need to decide to walk. ");

var walk = ask.question("If you want to walk, type in 'W'.  If you wish to put your tail between your legs and run like a dog, type in 'flee'. ");

if (walk === "w") {
    whichBaddie();
} else if (walk === "flee") {
    console.log("Thanks for nothing you cowardly cur!  May Hades find you quickly.")
} else {
    console.log("That is not a valid response.  Please try again. ")
};

function whichBaddie(baddie) {
    var baddie = Math.floor((Math.random() * 4) + 1);
    if (baddie === 1) {
        console.log(firstName + ", we've encountered a cyclops!  What shall we do? ");
        fightOrFlight();
    } else if (baddie === 2) {
        console.log(firstName + ", we've run across the witch Circe!  What shall we do? ");
        fightOrFlight();
    } else if (baddie === 3) {
        console.log(firstName + ", we can hear the song of the sirens!  What shall we do? ");
        fightOrFlight();
    } else {
        console.log("I don't like it, " + firstName + ", everything is quiet; a little too quiet...")
    };
};

function fightOrFlight(shallWe) {
    var shallWe = ask.question("Do you decide to fight or flee?  Type 'attack' to fight, or 'run' to flee. ");
    if (shallWe === 'attack') {
        fight();
    } else if (shallWe === 'run') {
        flee();
    } else {
        console.log("I'm sorry, I didn't quite get that...")
    }
};

function fight(fight) {
    var fight = Math.floor((Math.random() * 2) + 1);
    if (fight === 1) {
        console.log("You struck your foe, but it rises again and strikes at you!")
        enemyStrike();
    } else {
        console.log("You fought and fell with honor.  May you find peace on the Elysian Fields. ")
    };
};

function flee(flee) {
    var flee = Math.floor((Math.random() * 2) + 1);
    if (flee === 1) {
        console.log("Wise choice to flee.  You successfully evaded your foe and survived to fight another day. ")
    } else {
        console.log("Your foe was more persistant than you thought.  It pursued you, caught and devoured you.  Hades collects your soul. ")
    }
};

function enemyStrike(damage) {
    var damage = Math.floor((Math.random() * 10) + 1);
    if (damage >= 7) {
        console.log("You fought well, but your enemy was better.  Say hello to Hades for me. ")
    } else {
        console.log("You fought valiantly and overcame your foe.  May your luck continue on our journey together. ")
        rightLeft();
    }
};

function rightLeft(rightLeft) {
    var
    var rightLeft = Math.floor((Math.random() * 20) + 1);
    if (rightLeft >= 15) {
        console.log("We have reached the end of our quest.  Congratulations on helping me get home in safety. ")
    } else {
        whichBaddie();
    }
}