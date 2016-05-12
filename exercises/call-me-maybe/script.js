var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];

function attemptCall(name, dontCall, call, sendText) {
    // Is there more than 1 "a" in the name so we know to
    // invoke the sendText callback
    var numAs = name.toLowerCase().split("a").length - 1;

    if (numAs > 1) {
        sendText(name);
    } else if (name.length % 2 === 0) {
        call(name);
    } else {
        dontCall(name);
    }
}

function call(name) {
    console.log("Called " + name + ".")
}

function dontCall(name) {
    console.log("You did not call " + name + ".")

}

function sendText(name) {
    console.log("Sent a text to " + name + ".")
}

names.forEach(function (name) {
    attemptCall(name, dontCall, call, sendText);
});