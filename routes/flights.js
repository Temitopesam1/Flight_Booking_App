import { Router } from 'express';
const router = Router();
import availableFlights from '../controllers/flightsController';

/**
 * @swagger
 * /flights:
 *   get:
 *     summary: Retrieve available flights based on user input
 *     parameters:
 *       - in: query
 *         name: departure
 *         schema:
 *           type: string
 *         description: Departure city
 *       - in: query
 *         name: destination
 *         schema:
 *           type: string
 *         description: Destination city
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date
 *         description: Travel date
 *     responses:
 *       200:
 *         description: List of available flights
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 departure: City A
 *                 destination: City B
 *                 date: 2023-08-15
**/

router.get('/', availableFlights.getFlights);

router.get('/:id', availableFlights.getFlight);


export default router;