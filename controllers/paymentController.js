const generateId  = require("../utils/idGenerator");


processPayment = () => {
    try{
        // Other logic to process payment here


        // Mock payment system logic to return a success message in JSON format if successful
        const paymentId = generateId();
        const payment = { paymentId, "Amount": "$100" }
        return payment;
    } catch(error){
        throw new Error("Unable to process payment!")
    }
};
module.exports = processPayment ;


