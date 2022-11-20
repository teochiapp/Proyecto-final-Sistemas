import { Application } from "express";
import CommonRoutes from "./common.routes";
import createBookingAction from "../actions/booking/create.booking.action";
import updateBookingStatusAction from "../actions/booking/update.booking.status.action";
import listBookingsAction from "../actions/booking/list.bookings.action";
import getBookingByNameAndFromDateAction from "../actions/booking/get.booking.by.name.and.fromDate.action";

class BookingRoutes extends CommonRoutes{
    constructor(app: Application){
        super(app, 'Booking')
    }

    setUpRoutes(): Application {
        this.app.post('/booking', createBookingAction.run);
        this.app.put('/booking/:id', updateBookingStatusAction.run);
        this.app.get('/bookings', listBookingsAction.run);
        this.app.get('/bookings/find', getBookingByNameAndFromDateAction.run);


        return this.app;
    }
}

export default BookingRoutes;