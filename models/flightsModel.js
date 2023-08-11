const availableFlights = [
    { id: 1, departure: 'City A', destination: 'City B', date: '2023-08-16' },
    { id: 2, departure: 'City C', destination: 'City D', date: '2023-08-16' },
];

class FlightsModel{
    
    getAllFlights = () => {
        // Return all flights
        return availableFlights;
    }

    getAvailableFlights(departure, destination, date) {
        // Logic to filter and return available flights based on input
        const filteredFlights = availableFlights.filter(flight =>
            (!departure || flight.departure === departure) &&
            (!destination || flight.destination === destination) &&
            (!date || flight.date === date)
        );
    
        return filteredFlights;
    }

    getFlightById(flightId) {
        // Retrieve flight by ID
        let flight = availableFlights.find(flight => flight.id === parseInt(flightId, 10));
        return flight;
    }
}
const flightsModel = new FlightsModel()
module.exports = flightsModel;