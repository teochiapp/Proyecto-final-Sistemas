import bookingRepository from "../../../infrastructure/repositories/booking.repository";
import {GetBookingByNameAndFromDateCommand} from "../../commands/booking/get.booking.by.name.and.fromDate.command"; 

class GetBookingByNameAndFromDateHandler{
    async execute(command: GetBookingByNameAndFromDateCommand){
        const booking = await bookingRepository.findOneFromNameAndFromDate(command.getName(), command.getDateFrom());
        if (!booking){
            throw new Error('booking not found');
        }

        return booking;
    }
}


export default new GetBookingByNameAndFromDateHandler();