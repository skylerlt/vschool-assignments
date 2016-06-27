var express = require("express");
var beenPlacesRouter = express.Router();
var BeenPlaces = require("../models/beenPlaces");

beenPlacesRouter.get("/", function (req, res) {
    BeenPlaces.find({
        user: req.user._id
    }, function (err, beenPlaces) {
        if (err) res.status(500).send(err);
        res.send(beenPlaces);
    });
});

beenPlacesRouter.post("/", function (req, res) {
    var newBeenPlaces = new BeenPlaces(req.body);
    newBeenPlaces.user = req.user._id;
    newBeenPlaces.save(function (err, beenPlace) {
        if (err) res.status(500).send(err);
        res.send(beenPlace);
    });
});


module.exports = beenPlacesRouter;
