import passengerRepository from "../../../infrastructure/repositories/passenger.repository";
import { ListPassengerCommand } from "../../commands/passenger/list.passenger.command";

class ListPassengerHandler {
    async execute(command: ListPassengerCommand) {
        const passenger = await passengerRepository.findOneById(command.getId());

        if (!passenger) {
            throw new Error('Passenger not found');
        }

        return passenger;
    }
}

export default new ListPassengerHandler();
