import express from 'express';
import { json } from 'body-parser';
import flightsRoute from './routes/flights';
import bookingRoute from './routes/booking';
import paymentRoute from './routes/payment';
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');

const app = express();
app.use(json());

app.use('/flights', flightsRoute);
app.use('/booking', bookingRoute);
app.use('/payment', paymentRoute);

// Serve Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export default app;  // Export the app for testing purposes
