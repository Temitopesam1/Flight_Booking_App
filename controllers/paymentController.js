import { generateId } from "../utils/idGenerator";


exports.processPayment = (req, res) => {
    try{
        const data = req.body;  // Get data from request body
        // Mock payment system logic to return a success message in JSON format if successful
        const paymentId = generateId();
        res.status(200).json({ message: 'Payment successful.', paymentId });
    } catch(error){
        return res.status(500).json({ error: error.message });
    }
};


