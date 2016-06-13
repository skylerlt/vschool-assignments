var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

var family = [
    {
        "name": "Skyler",
        "age": 31,
        "position": "Dad",
        "nickname": "Sky"
    },
    {
        "name": "Amanda",
        "age": 30,
        "position": "Mom",
        "nickname": "Mandy"
    },
    {
        "name": "Lillian",
        "age": 6,
        "position": "Daughter",
        "nickname": "Lilly"
    },
    {
        "name": "Clara",
        "age": 5,
        "position": "Daughter",
        "nickname": "Clara"
    },
    {
        "name": "Jared",
        "age": 3,
        "position": "Son",
        "nickname": "Red"
    },
    {
        "name": "Oliver",
        "age": 2,
        "position": "Son",
        "nickname": "Ollie"
    },
    {
        "name": "Grayson",
        "age": .2,
        "position": "Son",
        "nickname": "Gray"
    }
];

app.get("/myFamily", function (req, res) {
    res.send(family);
});

app.post("/myFamily", function (req, res) {
    req.body.id = uuid.v4();
    family.push(req.body);
    res.send(req.body);
});

app.delete("/myFamily/:familyId", function (req, res) {
    for (var i = 0; i < family.length; i++) {
        if (family[i].id === req.params.familyId) {
            family[i].splice(i, 1);
            return res.send("Family member disowned!")
        }
    }
    res.send("No family member with that ID found. ")
})

app.put("/myFamily/:familyID", function (req, res) {
    for (var i = 0; i < family.length; i++) {
        if (family[i].id === req.params.familyId) {
            family[i] = req.body;
            return res.send(family[i]);
        }
    }
    res.send("No family member with that ID found. ");
})

app.listen(8000, function () {
    console.log("I hear you, son!")
});
