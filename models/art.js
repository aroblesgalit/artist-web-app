const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },
    img: {
        type: String,
        trim: true,
        required: true
    },
    medium: {
        type: String,
        trim: true,
        required: true
    }
});

const Art = mongoose.mongoose.model("Art", artSchema);

module.exports = Art;