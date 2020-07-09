const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
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
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        trim: true,
        required: true
    },
    print: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },
    info: {
        type: String,
        trim: true,
        default: "No info provided."
    },
    countInStock: {
        type: Number,
        default: 0
    },
    sold: {
        type: Number,
        default: 0
    }
})

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;