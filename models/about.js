const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        lowercase: true,
        default: "john doe"
    },
    email: {
        type: String,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        lowercase: true,
        default: "johndoe@email.com"
    },
    phone: {
        type: Number,
        trim: true,
        match: [/\d{10}/],
        default: 5555555555
    },
    about: {
        type: String,
        trim: true,
        default: "Here's my story..."
    },
    socialMedias: {
        type: Array
    },
    imgHome: {
        type: String,
        trim: true,
        default: "https://via.placeholder.com/900x1230"
    },
    imgAboutTop: {
        type: String,
        trim: true,
        default: "https://via.placeholder.com/900x700"
    },
    imgAboutBot: {
        type: String,
        trim: true,
        default: "https://via.placeholder.com/900x700"
    }
});

const About = mongoose.model("About", aboutSchema);

module.exports = About;