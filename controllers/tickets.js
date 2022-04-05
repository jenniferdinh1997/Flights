const Ticket = require('../models/tickets');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req,res) {
    res.render('tickets/new');
}

function create(req,res) {
   
}
