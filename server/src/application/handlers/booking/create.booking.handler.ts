import { Booking } from "../../../domain/entities/booking.entity";
import bookingRepository from "../../../infrastructure/repositories/booking.repository";
import { CreateBookingCommand } from "../../commands/booking/create.booking.command";
import passengerRepository from "../../../infrastructure/repositories/passenger.repository";
import accomodationRepository from "../../../infrastructure/repositories/accommodation.repository";

class CreateBookingHandler{
    async execute(command: CreateBookingCommand){

        const owner = await passengerRepository.findOneById(command.getOwnerId());
        if (!owner) {
            throw new Error("owner not found")
        }
        const passengers = [];

        const accomodation = await  accomodationRepository.findOneById(command.getAccomodationId());
        if(!accomodation){
            throw new Error("accomodation not found")
        }

        for(const id of command.getPassengersId()){
            const passenger = await passengerRepository.findOneById(id);
            if(!passenger){
                throw new Error("passenger not found");
            }

            passengers.push(passenger);
        }

        //Check if the owner is in the passengers array, if not,  we add him
        const checkForOwnerBetweenPassengers = passengers.find(p => p.getId() === owner.getId());
        if(!checkForOwnerBetweenPassengers) {
            passengers.push(owner);
        }


        const booking = Booking.create(
            owner,
            passengers,
            accomodation,
            command.getDateFrom(),
            command.getDateTo()
        )

        

        await bookingRepository.save(booking);

    }
}

export default new CreateBookingHandler();