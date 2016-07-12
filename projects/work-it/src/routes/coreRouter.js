var express = require("express");
var CoreRouter = express.Router();
var Core = require("../models/core.json");

CoreRouter.get("/", function (req, res) {
    res.send(Core);
});

module.exports = CoreRouter;
