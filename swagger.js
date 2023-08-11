const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Conversational Bot Flight Booking API',
      version: '1.0.0',
      description: 'API documentation for the Conversational Bot Flight Booking App',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API route files
};

const specs = swaggerJsDoc(options);

module.exports = specs;
