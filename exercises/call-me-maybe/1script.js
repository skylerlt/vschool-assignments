var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];

function attemptCall(name, dontCall, call, sendText) {
    var numA = name.toLowerCase().split("a").length - 1;

    if (numA > 1) {
        sendText(name);
    } else if (name.length % 2 === 0) {
        call(name);
    } else {
        dontCall(name);
    }
};

function sendText(name) {
    console.log("You texted: " + name)
};

function call(name) {
    console.log("You called: " + name)
};

function dontCall(name) {
    console.log('You did not call: ' + name)
};

names.forEach(function (name) {
    attemptCall(name, dontCall, call, sendText)
});