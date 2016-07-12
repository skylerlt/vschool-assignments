var express = require("express");
var LBRouter = express.Router();
var LowerBody = require("../models/lowerBody.json")

LBRouter.get("/", function (req, res) {
    res.send(LowerBody);
});


module.exports = LBRouter;
