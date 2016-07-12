var express = require("express");
var CardioRouter = express.Router();
var Cardio = require("../models/cardio.json");

CardioRouter.get("/", function (req, res) {
    res.send(Cardio);
});

module.exports = CardioRouter;
