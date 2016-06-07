var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

var bounties = [
    {
        "firstName": "Luke",
        "lastName": "Skywalker",
        "living": true,
        "bountyAmount": 150000,
        "type": "Jedi"
    }
];

app.get("/bounty", function (req, res) {
    res.send(bounties);
});

app.post("/bounty", function (req, res) {
    req.body.id = uuid.v4();
    bounties.push(req.body);
    res.send(req.body);
});

app.put("/bounty/:bountyId", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            bounties[i] = req.body;
            res.send(bounties[i]);
        }
    }
    res.send("No bounty found.");
});

app.delete("/bounty/:bountyId", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            bounties.splice(i, 1);
            res.send("Deleted!");
        }
    }
});

app.listen(8000, function () {
    console.log("App is listening on port 8000!");
});
