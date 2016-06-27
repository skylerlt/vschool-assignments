var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var beenPlacesSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    sites: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    backgroundImg: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("BeenPlaces", beenPlacesSchema);
