const Flight = require('../models/flight');

module.exports = {
    create
}

function create(req,res) {
    Flight.findById(req.params.id, function(err,destinationFromDb){
    destinationFromDb.destinations.push(req.body);
    destinationFromDb.save(function(err){
        res.redirect(`/flights/${destinationFromDb._id}`);
        })
    })
}