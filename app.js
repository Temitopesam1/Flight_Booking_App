const express = require('express');
const bodyParser = require('body-parser');
const flightsRoute = require('./routes/flights');
const bookingRoute = require('./routes/booking');
const paymentRoute = require('./routes/payment');
const swaggerUi = require('swagger-ui-express');
// const specs = require('./swagger');

const app = express();
app.use(bodyParser.json());

app.use('/flights', flightsRoute);
app.use('/booking', bookingRoute);
app.use('/payment', paymentRoute);

// Serve Swagger UI at /api-docs
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


module.exports = app;  // Export the app for testing purposes
