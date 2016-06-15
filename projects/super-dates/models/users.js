var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: {
        type: String,
        require: true
    },
    identity: {
        type: String,
        require: true
    },
    secretIdentity: String,
    abilities: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    lookingFor: {
        type: String,
        require: true
    },
    photo: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("User", userSchema);
