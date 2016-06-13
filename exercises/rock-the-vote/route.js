var express = require("express");
var commentRoutes = express.Router();
var userPosts = require("./data");

commentRoutes.route('/')
    .get(function (req, res) {
        res.send(userPosts);
    })
    .post(function (req, res) {
        userPosts.push(req.body);
        res.send(req.body);
    });

commentRoutes.route("/:id")
    .delete(function (req, res) {
        for (var i = 0; i < userPosts.length; i++) {
            if (userPosts[i].id === req.params.id) {
                userPosts.splice(i, 1);
            }
        }
    })
    .put(function (req, res) {
        for (var i = 0; i < userPosts.length; i++) {
            if (userPosts[i].id === req.params.id) {
                userPosts[i] = req.body;
                return res.send(userPosts[i]);
            }
        }
    });

module.exports = commentRoutes;
