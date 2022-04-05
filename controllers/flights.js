const Flight = require('../models/flight');
const Tickets = require('../models/tickets');

module. exports = {
    index,
    new: newFlight,
    create,
    show
};

function index(req,res){
    Flight.find({},function(err,flights){
        res.render('flights/index',{
            flights,
            title: 'All Flights'
        });
    });
}

function newFlight(req,res) {
    res.render('flights/new');
}

function create(req,res) {
    Flight.create(req.body, function(err,flights){
        if (err) return res.redirect('flights/new');
        res.redirect('flights')
    });
}

function show(req,res) {
    Flight.findById(req.params.id, function(err,flights){
        Tickets.find(flights._id, function (err,tickets) {
            res.render('flights/show', {
                flights,
                tickets,
                title: 'Flight Details'
            })
        })
    })
}