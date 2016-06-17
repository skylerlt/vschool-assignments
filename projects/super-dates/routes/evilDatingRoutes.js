var express = require("express");
var evilUserRouter = express.Router();
var EvilUsers = require("../models/evilUsers");

evilUserRouter.get("/evilusers", function (req, res) {
    EvilUsers.find(function (err, evilUsers) {
        if (err) throw err;
        res.send(evilUsers);
    });
});

//evilUserRouter.get("/evilusers", function (req, res) {
//    if (req.query.userName) {
//        var userNames = Users.userName.filter(function (users) {
//            return req.query.userName === User.userName;
//        });
//        return res.send(userNames);
//    } else {
//        res.send(users);
//    }
//    res.send("No matches found. ");
//});

evilUserRouter.post("/evilusers", function (req, res) {
    var newUser = new EvilUsers(req.body);
    newUser.save(function (err, evilUsers) {
        if (err) throw err;
        res.send(evilUsers);
    })
});

evilUserRouter.put("/evilusers/:id", function (req, res) {
    EvilUsers.findById(req.params.id, function (err, evilUsers) {
        if (err) {
            res.status(500).send(err);
        } else {
            evilUsers.identity = req.body.identity || evilUsers.identity;
            evilUsers.secretIdentity = req.body.secretIdentity || evilUsers.secretIdentity;
            evilUsers.abilities = req.body.abilities || evilUsers.abilities;
            evilUsers.gender = req.body.gender || evilUsers.gender;
            evilUsers.lookingFor = req.body.lookingFor || evilUsers.lookingFor;
            evilUsers.save(function (err, evilUsers) {
                if (err) {
                    res.status(500).send(err)
                }
                res.send(evilUsers);
            })
        }
    })
});

evilUserRouter.delete("/evilusers/:id", function (req, res) {
    EvilUsers.findByIdAndRemove(req.params.id, function (err, evilUsers) {
        if (err) throw err;
        res.send(evilUsers);
    })
});

module.exports = evilUserRouter;
