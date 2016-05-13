/* 
This represents any function that will take awhile to complete.
We're manually slowing down the completion of the function (using setInterval), 
which normally you won't do. Usually the reason the function will take awhile 
to complete is because it had to make a call over the internet to a server somewhere, 
and the response is taking awhile to come back.

We accept the starting temperature of the water (whatever temp it was coming out
of the faucet), as well as a callback function, which can usually be thought of as
"what should I do when this function is finally done?" You'll notice in the body of
the function that we only invoke the callback once the temperature rises to 212.
*/
function startBoilingWater(waterTemp, callback) {
    //Show that this function has started running.
    console.log("Water is on the stove. Heating up...");

    // Set a handler, which allows us to stop the setInterval by using clearInterval
    var handler = setInterval(function () {
        if (waterTemp < 212) {
            console.log(waterTemp);

            // make waterTemp 1 degree hotter
            waterTemp++;
        } else { // If temp is 212, which is boiling temp for water...
            clearInterval(handler);
            callback();
        }
    }, 200); // Temp increases 5 degrees per second. It's a sweet stove.
}

startBoilingWater(200, function () {
    console.log("Hey dude! Your water's boiling!");
});

// This is here to show that after I set the water on the stove to boil,
// I (i.e. the JavaScript program) didn't have to sit around and wait for 
// it to finish boiling. Instead I (i.e. the program) can continue on with 
// the other chores (statements to execute).
console.log("Off to do other things now...");
setTimeout(function () {
    console.log("Man, I'm being so productive while that water is still heating up!");
}, 1000);

/*
When you run this program, this is what you'll see:

Water is on the stove. Heating up...
Off to do other things now...
200
201
202
203
Man, I'm being so productive while that water is still heating up!
204
205
206
207
208
209
210
211
Hey dude! Your water's boiling!
*/