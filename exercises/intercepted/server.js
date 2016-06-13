var express = require("express");
var app = express();
var uuid = require("uuid");
var bodyParser = require("body-parser");
var addMonster = require("./add.js")
var port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use("/monsters", addMonster);

app.post("/monsters", function (req, res, next) {
    res.send(req.body.monster);
})


app.listen(port, function () {
    console.log("Sup, bro?");
})
