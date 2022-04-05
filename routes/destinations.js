var express = require('express');
var router = express.Router();
const destinationCtlr = require('../controllers/destinations')

router.post('/flights/:id/destination', destinationCtlr.create);

module.exports = router;