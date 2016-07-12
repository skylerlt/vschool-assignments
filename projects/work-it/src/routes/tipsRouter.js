var express = require("express");
var tipsRouter = express.Router();
var Tips = require("../models/tips.json");

tipsRouter.get("/", function (req, res) {
    res.send(Tips);
});

module.exports = tipsRouter;
