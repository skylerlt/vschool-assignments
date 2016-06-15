var express = require("express");
var userRouter = express.Router();
var Users = require("../models/users");

userRouter.get("/users", function (req, res) {
    Users.find(function (err, users) {
        if (err) throw err;
        res.send(users);
    });
});

userRouter.post("/users", function (req, res) {
    var newUser = new Users(req.body);
    newUser.save(function (err, users) {
        if (err) throw err;
        res.send(users);
    })
});

userRouter.put("/users/:id", function (req, res) {
    Users.findById(req.params.id, function (err, users) {
        if (err) {
            res.status(500).send(err);
        } else {
            users.identity = req.body.identity || users.identity;
            users.secretIdentity = req.body.secretIdentity || users.secretIdentity;
            users.abilities = req.body.abilities || users.abilities;
            users.gender = req.body.gender || users.gender;
            users.lookingFor = req.body.lookingFor || users.lookingFor;
            users.save(function (err, users) {
                if (err) {
                    res.status(500).send(err)
                }
                res.send(users);
            })
        }
    })
});

userRouter.delete("/users/:id", function (req, res) {
    Users.findByIdAndRemove(req.params.id, function (err, users) {
        if (err) throw err;
        res.send(users);
    })
})

module.exports = userRouter;
