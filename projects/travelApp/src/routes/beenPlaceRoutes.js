var express = require("express");
var beenPlacesRouter = express.Router();
var BeenPlaces = require("../models/beenPlaces");

beenPlacesRouter.get("/", function (req, res) {
    console.log(req);
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

beenPlacesRouter.get("/:beenId", function (req, res) {
    BeenPlaces.findOne({
        _id: req.params.beenId,
        user: req.user._id
    }, function (err, beenPlace) {
        if (err) res.status(500).send(err);
        else res.send(beenPlace);
    });
});

beenPlacesRouter.put("/:beenId", function (req, res) {
    BeenPlaces.findOneAndUpdate(req.params.beenId, req.body, {
        new: true
    }, function (err, beenPlace) {
        if (err) res.status(500).send(err);
        else res.send(beenPlace);
    })
})


module.exports = beenPlacesRouter;
