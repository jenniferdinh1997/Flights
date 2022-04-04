const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
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
    res.render('flights/index')
}

function create(req,res) {

}