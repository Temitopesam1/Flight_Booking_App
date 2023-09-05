const bookingModel = require('../models/bookingModel');
const flightsModel = require('../models/flightsModel');
const processPayment = require('./paymentController');

function confirmBooking(req, res) {
    // Validate and process data
    try {
        const { flight_id, ...customer_details } = req.body;
        
        const flight = flightsModel.getFlightById(flight_id);
        if (!flight) {
            throw new Error('Invalid flight ID.');
        }
        const payment = processPayment()
        const ts = Date.now()
        const date = new Date(ts);


        // Store booking
        booking = bookingModel.storeBooking(
            {
                flight,
                payment,
                customer_details,
                "Date": date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
            }
        );

        return res.status(200).json({ message: 'Booking confirmed successfully.', booking }); 
    }   catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = confirmBooking;
