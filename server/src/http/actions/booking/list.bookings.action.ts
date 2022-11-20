import {Request, Response} from "express";
import { Booking } from "../../../domain/entities/booking.entity";
import bookingRepository from "../../../infrastructure/repositories/booking.repository";

class ListBookingsAction {
  async run(_req: Request, res: Response) {
    const bookings: Booking[] = await bookingRepository.findAll();

    const filteredBookings: object[] = bookings.map(booking => ({...booking.toPrimitives()}));

    return res.status(200).json(filteredBookings);
  }
}

export default new ListBookingsAction();

