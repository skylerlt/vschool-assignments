var express = require("express");
var UBRouter = express.Router();
var LBRouter = express.Router();
var UpperBody = require("../models/upperBody.json");
var LowerBody = require("../models/lowerBody.json")

UBRouter.get("/", function (req, res) {
    res.send(UpperBody);
});

LBRouter.get("/", function (req, res) {
    res.send(LowerBody);
});


module.exports = UBRouter, LBRouter;
