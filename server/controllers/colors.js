const mongoose = require('mongoose');
const Color = mongoose.model("Color");

module.exports = {
    index: (req, res) => {
        Color.find()
            .then((colors) => {
                console.log("We are in colors.find");
                console.log(colors);
                res.json(colors)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            });
    },

    getOne: (req, res) => {
        Color.findOne({_id: req.params.id})
            .then(color => res.json(color))
            .catch(err => res.status(400).json(err));
    },

    create: (req, res) => {
        Color.create(req.body)
            .then(newColor => res.json(newColor))
            .catch(creationErrors => res.status(400).json(creationErrors));
    },

    delete: (req, res) => {
        Color.deleteOne({_id: req.params.id})
            .then(response => res.json(response))
            .catch(err => res.json(err))
    },
    update: (req, res) => {
        Color.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true, new: true})
            .then(color => res.json(color))
            .catch(err => res.json(err))
    }
}
