import accommodationRepository from "../../../infrastructure/repositories/accommodation.repository";
import { UpdateAccommodationCommand } from "../../commands/accommodation/update.accommodation.command";

class UpdateAccommodationHandler {
    async execute(command: UpdateAccommodationCommand) {
        const user = await accommodationRepository.findOneById(command.getId());

        if (!user) {
            throw new Error('User not found');
        }

        user.changePrice(command.getPricePerNight());
        user.changeName(command.getName());

        await accommodationRepository.save(user);
    }
}

export default new UpdateAccommodationHandler();