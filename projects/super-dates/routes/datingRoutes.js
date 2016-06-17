var express = require("express");
var userRouter = express.Router();
var GoodUsers = require("../models/users");

userRouter.get("/", function (req, res) {
    console.log(req.query);
    GoodUsers.find(function (err, users) {
        if (err) throw err;
        console.log(users);
        res.send(users);
    });
});

//userRouter.get("/", function (req, res) {
//    if (req.query.userName) {
//        var userNames = GoodUsers.userName.filter(function (users) {
//            return req.query.userName === User.userName;
//        });
//        return res.send(userNames);
//    } else {
//        res.send(users);
//    }
//    res.send("No matches found. ");
//});

userRouter.post("/", function (req, res) {
    var newUser = new Users(req.body);
    newUser.save(function (err, users) {
        if (err) throw err;
        res.send(users);
    })
});

userRouter.put("/:id", function (req, res) {
    GoodUsers.findById(req.params.id, function (err, users) {
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

userRouter.delete("/:id", function (req, res) {
    GoodUsers.findByIdAndRemove(req.params.id, function (err, users) {
        if (err) throw err;
        res.send(users);
    })
});


module.exports = userRouter;
