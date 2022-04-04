var express = require('express');
var router = express.Router();
const flightList = require('../controllers/flights');

// localhost:3000/flights
router.get('/', flightList.index);
router.get('/new', flightList.new);
router.post('/', flightList.create);

module.exports = router;
