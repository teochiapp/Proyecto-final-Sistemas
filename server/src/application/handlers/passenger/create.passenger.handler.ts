import {Passenger} from "../../../domain/entities/passenger.entity";
import passengerRepository from "../../../infrastructure/repositories/passenger.repository";
import {CreatePassengerCommand} from "../../commands/passenger/create.passenger.command";

class CreatePassengerHandler {
  async execute(command: CreatePassengerCommand) {

    const idCard = command.getIdentityCard();
    const findId = await passengerRepository.findOneByIdentityCard(idCard);

    if(!findId){
      const passenger = Passenger.create(
        command.getFullName(),
        command.getEmail(),
        command.getIdentityCard()
      );

      await passengerRepository.save(passenger);
    }else{
      
      throw new Error('passenger already exists');
    }    
  }
}

export default new CreatePassengerHandler();