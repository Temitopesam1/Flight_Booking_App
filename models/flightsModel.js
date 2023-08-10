const availableFlights = [
    { id: 1, departure: 'City A', destination: 'City B', date: '2023-08-15' },
    { id: 2, departure: 'City C', destination: 'City D', date: '2023-08-16' },
];

class FlightsModel{
    getAvailableFlights(departure, destination, date) {
        // Logic to filter and return available flights based on input
        const filteredFlights = availableFlights.filter(flight =>
            flight.departure === departure &&
            flight.destination === destination &&
            flight.date === date
        );
        return filteredFlights;
    }
    getFlightById(flightId) {
        // Retrieve flight by ID
        return availableFlights.find(flight => flight.id === flightId);
    }
}
const flightsModel = new FlightsModel()
export default flightsModel;