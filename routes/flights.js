const express = require('express');
const router = express.Router();
const availableFlights = require('../controllers/flightsController');


router.get('/', availableFlights.getFlights);

router.get('/:id/', availableFlights.getFlight);


module.exports = router;