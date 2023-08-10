import { Router } from 'express';
const router = Router();
import { confirmBooking } from '../controllers/bookingController';

router.post('/', confirmBooking);

export default router;
