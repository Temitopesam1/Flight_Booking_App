const uuid = require('uuid');

export function generateId() {
    // A function to generate a unique booking ID
    return uuid.v4();
}