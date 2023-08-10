import flightsModel from '../models/flightsModel';

class AvailableFlights{

    getFlights(req, res) {

        // Validate and process data
        try {
            const { departure, destination, date } = req.query;

            if (!departure || !destination || !date) {
                throw new Error('Invalid input. Departure city, destination city, and date are required.');
            }
            const availableFlights = flightsModel.getAvailableFlights(departure, destination, date);

            // Return a list of flight options in JSON format
            return res.status(200).json(availableFlights);

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    getFlight(res, req){

        // Validate and process data
        try {
            const availableFlight = flightsModel.getFlightById(req.params);

            // Return a flight option in JSON format
            return res.status(200).json(availableFlight);

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }

    }
    
}
const availableFlights = new AvailableFlights()
export default availableFlights;
