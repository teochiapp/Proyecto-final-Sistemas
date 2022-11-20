import passengerRepository from '../../../infrastructure/repositories/passenger.repository';
import {UpdatePassengerCommand} from '../../commands/passenger/update.passenger.command';


class UpdatePassengerHandler{
    async execute(command: UpdatePassengerCommand){
        const passenger = await passengerRepository.findOneByIdentityCard(command.getIdentityCard());

        if(!passenger){
            throw new Error('passenger not found');

        }

        passenger.changeEmail(command.getEmail());
        passenger.changeNames(command.getFullName());

        await passengerRepository.save(passenger);
        
    }
}


export default new UpdatePassengerHandler();