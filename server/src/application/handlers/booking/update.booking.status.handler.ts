import bookingRepository from "../../../infrastructure/repositories/booking.repository";
import { UpdateBookingStatusCommand } from "../../commands/booking/update.booking.status.command";
import { bookingStatus } from "../../../domain/enums/booking.status"
class UpdateBookingStatusHandler{
    async execute(command: UpdateBookingStatusCommand){
        const booking = await bookingRepository.findOneById(command.getId());

        if(!booking){
            throw new Error('booking not found')
        }

        if(command.getStatus() != bookingStatus.pending && command.getStatus() != bookingStatus.accepted && command.getStatus() != bookingStatus.rejected){
            throw new Error('status invalid');
        }

        booking.changeStatus(command.getStatus());

        await bookingRepository.save(booking);
    }
}

export default new UpdateBookingStatusHandler();