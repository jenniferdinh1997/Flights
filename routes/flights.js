var express = require('express');
var router = express.Router();
const flightList = require('../models/flight');

router.get('/', flightList.index);

module.exports = router;
