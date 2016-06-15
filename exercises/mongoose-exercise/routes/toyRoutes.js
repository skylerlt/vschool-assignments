var express = require("express");
var toyRouter = express.Router();
var Toy = require("../models/toys");

toyRouter.get("/toys", function (req, res) {
    Toy.find(function (err, toys) {
        if (err) throw err;
        res.send(toys);
    });
});

toyRouter.post("/toys", function (req, res) {
    var newToy = new Toy(req.body);
    newToy.save(function (err, toy) {
        if (err) throw err;
        res.send(toy);
    })
});

module.exports = toyRouter;
