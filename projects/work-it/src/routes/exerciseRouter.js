var express = require("express");
var exerciseRouter = express.Router();
var Exercises = require("../models/exercises");

exerciseRouter.get("/", function (req, res) {
    Exercises.find({
        user: req.user._id
    }, function (err, exercises) {
        if (err) res.status(500).send(err);
        res.send(exercises);
    });
});

exerciseRouter.post("/", function (req, res) {
    var newExercise = new Exercises(req.body);
    newExercise.user = req.user._id;
    newExercise.save(function (err, exercise) {
        if (err) res.status(500).send(err);
        res.send(exercise);
    });
});

exerciseRouter.delete("/", function (req, res) {
    Exercises.remove({
        user: req.user._id
    }, function (err, exercises) {
        if (err) res.status(500).send(err);
        res.send("Success!");
    })
})

exerciseRouter.delete("/:exerciseId", function (req, res) {
    Exercises.findOneAndRemove({
        _id: req.params.exerciseId,
        user: req.user._id
    }, function (err, exercise) {
        if (err) res.status(500).send(err);
        else res.send(exercise);
    })
});

module.exports = exerciseRouter;
