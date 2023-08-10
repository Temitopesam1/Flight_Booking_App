import { Router } from 'express';
const router = Router();
import { processPayment } from '../controllers/paymentController';

router.post('/', processPayment);

export default router;
