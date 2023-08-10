import bookingModel from '../models/bookingModel';
import flightsModel from '../models/flightsModel';

export function confirmBooking(req, res) {
    // Validate and process data
    try {
        const { flight_id, ...userInfo } = req.body;
        
        const flight = flightsModel.getFlightById(req.params);
        if (!flight) {
            throw new Error('Invalid flight ID.');
        }

        // Store booking
        bookingId = bookingModel.storeBooking({ flight, ...userInfo });

        return res.status(200).json({ message: 'Booking confirmed successfully.', bookingId }); 
    }   catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
