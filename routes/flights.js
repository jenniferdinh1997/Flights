var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights');

// localhost:3000/flights
router.get('/', flightsController.index);
router.get('/new', flightsController.new);
router.post('/', flightsController.create);

module.exports = router;
