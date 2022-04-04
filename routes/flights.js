var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights');

// localhost:3000/flights
router.get('/index', flightsController.index);
router.get('/new', flightsController.new);
router.post('/index', flightsController.create);
router.post('/show', flightsController.show);

module.exports = router;
