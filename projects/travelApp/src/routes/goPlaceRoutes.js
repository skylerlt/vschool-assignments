var express = require("express");
var goPlacesRouter = express.Router();
var GoPlaces = require("../models/goPlaces");

goPlacesRouter.get("/", function (req, res) {
    GoPlaces.find({
        user: req.user._id
    }, function (err, goPlaces) {
        if (err) res.status(500).send(err);
        res.send(goPlaces);
    });
});

goPlacesRouter.post("/", function (req, res) {
    var newGoPlaces = new GoPlaces(req.body);
    newGoPlaces.user = req.user._id;
    newGoPlaces.save(function (err, goPlace) {
        if (err) res.status(500).send(err);
        res.send(goPlace);
    });
});

goPlacesRouter.put("/:goId", function (req, res) {
    GoPlaces.findOneAndUpdate(req.params.goId, req.body, {
        new: true
    }, function (err, goPlace) {
        if (err) res.status(500).send(err);
        else res.send(goPlace);
    })
})


module.exports = goPlacesRouter;
