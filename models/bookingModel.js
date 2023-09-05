const generateId  = require("../utils/idGenerator");

const bookings = [];


class BookingModel{
    storeBooking(bookingData) {
        // Store booking data
        const bookingId = generateId();
        const bookingDetails = { bookingId, ...bookingData };
        bookings.push(bookingDetails);
        return bookings.find(booking => booking.bookingId === bookingId);
    }
}
const bookingModel = new BookingModel()
module.exports = bookingModel;
