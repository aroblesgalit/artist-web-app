const db = require("../models");

// Define methods for the art pieces
module.exports = {
    getAllArts: function (req, res) {
        db.Art
            .find({})
            .then(dbModels => res.json(dbModels))
            .catch(err => res.status(422).json(err));
    },
    addArt: function (req, res) {
        db.Art
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateArt: function (req, res) {
        db.Art
            .findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    deleteArt: function (req, res) {
        db.Art
            .deleteOne({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}