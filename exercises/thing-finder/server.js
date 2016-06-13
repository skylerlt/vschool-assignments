var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

var potters = [
    {
        name: "Harry",
        age: 12,
        friends: [{
            name: "Ron",
            age: 12,
            friends: [{
                name: "Harry",
            }, {
                name: "Hermione"
            }],
            pet: "rat",
            wandCore: "unicorn hair"
        }, {
            name: "Hermione",
            age: 12,
            friends: [{
                name: "Harry"
            }, {
                name: "Ron"
            }],
            pet: "cat",
            wandCore: "dragon heartstring"
        }],
        pet: "owl",
        wandCore: "phoenix feather"
    }
];

app.get("/myPotters", function (req, res) {
    if (req.query.wandCore) {
        var potterWands = potters.filter(function (potters) {
            return req.query.wandCore === potters.wandCore;
        });
        return res.send(potterWands);
    } else {
        res.send(potters);
    }
    res.send("No match found. ");
});




app.listen(8000, function () {
    console.log("I'm listening!");
});
