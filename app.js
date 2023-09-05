const express = require('express');
const bodyParser = require('body-parser');
const flightsRoute = require('./routes/flights');
const bookingRoute = require('./routes/booking');


const app = express();
app.use(bodyParser.json());

app.use('/flights', flightsRoute);
app.use('/booking', bookingRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


module.exports = app;  // Export the app for testing purposes
