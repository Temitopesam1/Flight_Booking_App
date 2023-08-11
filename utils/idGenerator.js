const uuid = require('uuid');

function generateId() {
    // A function to generate a unique booking ID
    return uuid.v4();
}
module.exports = generateId;