var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

var someData = [];

app.get("/", function (req, res) {
    res.send("Hey, I'm working :)");
});

app.post("/", function (req, res) {
    someData.push(req.body);
    //    console.log(req);
    //    res.send(req.body);
});

app.put("/", function (req, res) {
    res.send("You want to update something?");
});

app.delete("/", function (req, res) {

});

app.listen(8000, function () {
    console.log("App is listening on port 8000!");
});
