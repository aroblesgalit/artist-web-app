const db = require("../models");

// Define methods for videos
module.exports = {
    getAllVideos: function (req, res) {
        db.Video
            .find({})
            .then(dbModels => res.json(dbModels))
            .catch(err => res.status(422).json(err));
    },
    addVideo: function (req, res) {
        db.Video
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateVideo: function (req, res) {
        db.Video
            .findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    deleteVideo: function (req, res) {
        db.Video
            .deleteOne({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}