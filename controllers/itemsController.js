const db = require("../models");

// Define methods for the items
module.exports = {
    getAllItems: function (req, res) {
        db.Item
            .find({})
            .sort({ name: 1 })
            .then(dbModels => res.json(dbModels))
            .catch(err => res.status(422).json(err));
    },
    addItem: function (req, res) {
        db.Item
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateItem: function (req, res) {
        db.Item
            .findByIdAndUpdate(req.params.id, {
                countInStock: req.body.countInStock
            }, { new: true })
            .then(res => res.json(res))
            .catch(err => res.status(422).json(err));
    }
}