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
    updateSoldItem: function (req, res) {
        db.Item
            .findByIdAndUpdate(req.body.id, {
                countInStock: req.body.countInStock,
                sold: req.body.sold
            }, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getItemById: function (req, res) {
        db.Item
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateItem: function (req, res) {
        db.Item
            .findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                img: req.body.img,
                price: req.body.price,
                size: req.body.size,
                print: req.body.print,
                info: req.body.info,
                countInStock: req.body.countInStock
            }, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    removeItem: function (req, res) {
        db.Item
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}