const db = require("../models");
const Addition = db.addition;


// Retrieve and return all additions from the database.
exports.findAll = (req, res) => {
    Addition.find()
        .then(additions => {
            res.send(additions);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving additions."
            });
        });
};



