import accommodationRepository from "../../../infrastructure/repositories/accommodation.repository";
import { GetAccommodationByNameCommand } from "../../commands/accommodation/get.accommodation.byName.command";

class GetAccommodationByNameHandler {
    async execute(command: GetAccommodationByNameCommand) {
        const accommodation = await accommodationRepository.findOneByName(command.getName());

        if (!accommodation) {
            throw new Error('Passenger not found');
        }

        return accommodation;
    }
}

export default new GetAccommodationByNameHandler();