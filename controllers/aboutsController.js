const db = require("../models");

// Define methods for the about content
module.exports = {
    getAbout: function (req, res) {
        db.About
            .find({})
            .then(dbModels => res.json(dbModels))
            .catch(err => res.status(422).json(err));
    },
    addAbout: function (req, res) {
        db.About
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateAbout: function (req, res) {
        db.About
            .findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}