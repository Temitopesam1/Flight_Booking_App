# Conversational Bot Flight Booking App

This project implements a backend application for a Conversational Bot Flight Booking App. The backend provides functionalities for retrieving available flights, confirming bookings, and simulating payment processing.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [License](#license)
- [API Documentation](#documentation)


## Getting Started

Follow these instructions to set up and run the Conversational Bot Flight Booking App backend on your local machine.

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation

Clone this repository:

   ```bash
   git clone https://github.com/Temitopesam1/Flight_Booking_App.git
   cd conversational-bot-flight-booking
   npm i
   ```

### Usage
Run the following command to start your server in development mode at `http://localhost:${PORT}`
```sh
npm run dev  # PORT=3000 by default if not specified as an environment variable
```
#### Testing
To test locally you can use Postman or Insomnia. You will need to set up the
following routes before testing:

| Method | Endpoint       | Description                                    |
|--------|:--------------:|------------------------------------------------|
| GET    | `/flights`     | Retrieve available flights based on user input |
| GET    | `/flights/:id` | Retrieve a particular flight                   |
| POST   | `/booking`     | Confirm a booking. Provide ID                  |
| POST   | `/payment`     | Payment processing for booking confirmation    |

Run unit tests to ensure the reliability and functionality of the application:
```sh
npm test
```
### Technologies Used
* ExpressJS
* NodeJs
* uuid (for generating unique IDs)
* chai (for testing)
* mocha (for testing)

### License
* This project is licensed under the MIT License

## API Documentation
[API documentation](http://localhost:3000/api-docs)





