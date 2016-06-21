var express = require("express");
var goodUserRouter = express.Router();
var GoodUsers = require("../models/users");

goodUserRouter.get("/", function (req, res) {
    GoodUsers.find(function (err, goodUsers) {
        if (err) throw err;
        res.send(goodUsers);
    });
});

goodUserRouter.post("/", function (req, res) {
    var newUser = new GoodUsers(req.body);
    newUser.save(function (err, goodUser) {
        if (err) throw err;
        res.send(goodUser);
    })
});

goodUserRouter.put("/:id", function (req, res) {
    GoodUsers.findById(req.params.id, function (err, goodUser) {
        if (err) {
            res.status(500).send(err);
        } else {
            goodUser.identity = req.body.identity || goodUser.identity;
            goodUser.secretIdentity = req.body.secretIdentity || goodUser.secretIdentity;
            goodUser.abilities = req.body.abilities || goodUser.abilities;
            goodUser.gender = req.body.gender || goodUser.gender;
            goodUser.lookingFor = req.body.lookingFor || goodUser.lookingFor;
            goodUser.save(function (err, goodUser) {
                if (err) {
                    res.status(500).send(err)
                }
                res.send(goodUser);
            })
        }
    })
});

goodUserRouter.delete("/:id", function (req, res) {
    GoodUsers.findByIdAndRemove(req.params.id, function (err, goodUser) {
        if (err) throw err;
        res.send(goodUser);
    })
});


module.exports = goodUserRouter;
