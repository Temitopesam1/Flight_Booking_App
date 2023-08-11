const flightsModel = require('../models/flightsModel');

class AvailableFlights{

    getFlights(req, res) {

        // Validate and process data
        try {
            if (!req.query){
                return res.status(200).json(flightsModel.getAllFlights());
            }

            const { departure, destination, date } = req.query;

            const availableFlights = flightsModel.getAvailableFlights(departure, destination, date);

            // Return a list of flight options in JSON format
            return res.status(200).json(availableFlights);

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    getFlight(req, res){

        // Validate and process data
        try {
            const availableFlight = flightsModel.getFlightById(req.params.id);
            
            if (!availableFlight) {
                return res.status(404).json({ error: 'Flight not found' });
            }

            // Return a flight option in JSON format
            return res.status(200).json(availableFlight);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }

    }
    
}
const availableFlights = new AvailableFlights()
module.exports = availableFlights;
