import { generateId } from "../utils/idGenerator";

const bookings = [];


class BookingModel{
    storeBooking(bookingData) {
        // Store booking data
        const bookingId = generateId();
        const bookingDetails = { ...bookingData, bookingId };
        bookings.push(bookingDetails);
        return bookingId;
    }
}
const bookingModel = new BookingModel()
export default bookingModel;
