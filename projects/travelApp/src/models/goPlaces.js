var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var goPlacesSchema = new Schema({
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
    sitesImg: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("GoPlaces", goPlacesSchema);
