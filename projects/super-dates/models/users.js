var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var goodUserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    identity: {
        type: String,
        required: true
    },
    secretIdentity: String,
    abilities: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    lookingFor: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("GoodUsers", goodUserSchema);
