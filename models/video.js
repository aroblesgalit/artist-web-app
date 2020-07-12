const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },
    url: {
        type: String,
        trim: true,
        required: true
    }
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;