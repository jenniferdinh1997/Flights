const Ticket = require('../models/tickets');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req,res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('tickets/new', {
            flight,
            title: 'Add New Ticket'
        })
    })
}

function create(req,res) {
    Flight.findById(req.params.id, function(err, flightDb) {
        req.body.flight = flightDb._id;
        Ticket.create(req.body, function(err,ticket) {
            res.redirect(`/flights/${flightDb._id}`);
        })
    })
}
