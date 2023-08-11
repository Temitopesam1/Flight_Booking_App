const bookingModel = require('../models/bookingModel');
const flightsModel = require('../models/flightsModel');

function confirmBooking(req, res) {
    // Validate and process data
    try {
        const { flight_id, ...userInfo } = req.body;
        
        const flight = flightsModel.getFlightById(flight_id);
        if (!flight) {
            throw new Error('Invalid flight ID.');
        }

        // Store booking
        booking = bookingModel.storeBooking({ flight, ...userInfo });

        return res.status(200).json({ message: 'Booking confirmed successfully.', booking }); 
    }   catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = confirmBooking;
