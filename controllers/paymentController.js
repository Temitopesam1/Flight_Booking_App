const generateId  = require("../utils/idGenerator");


processPayment = (req, res) => {
    try{
        const data = req.body;
        // Other logic to process payment here


        // Mock payment system logic to return a success message in JSON format if successful
        const paymentId = generateId();
        return res.status(200).json({ message: 'Payment successful.', paymentId });
    } catch(error){
        return res.status(500).json({ error: error.message });
    }
};
module.exports = processPayment ;


