var express = require("express");
var UBRouter = express.Router();
var UpperBody = require("../models/upperBody.json");

UBRouter.get("/", function (req, res) {
    res.send(UpperBody);
});

module.exports = UBRouter;
