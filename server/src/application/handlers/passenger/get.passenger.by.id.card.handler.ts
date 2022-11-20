import passengerRepository from "../../../infrastructure/repositories/passenger.repository";
import { GetPassengerByIdCardCommand } from "../../commands/passenger/get.passenger.by.id.card.command";


class GetPassengerByIdCardHandler{
    async execute (command: GetPassengerByIdCardCommand){
        const passenger = await passengerRepository.findOneByIdentityCard(command.getIdCard());
        
        if (!passenger) {
            throw new Error('User not found');
        }

        return passenger;
    }
}

export default new GetPassengerByIdCardHandler();