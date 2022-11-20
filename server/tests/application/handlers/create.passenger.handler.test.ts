import {CreatePassengerCommand} from "../../../src/application/commands/passenger/create.passenger.command"
import createPassengerHandler from "../../../src/application/handlers/passenger/create.passenger.handler";
import passengerRepository from "../../../src/infrastructure/repositories/passenger.repository"
import { Passenger } from "../../../src/domain/entities/passenger.entity";

describe('Create Passenger Handler', () => {

    it('should create a  passenger', async () => {

        //@ts-ignore 
     
        //generar instancia de passenger mockeada
        //generar mock del metodo find by idcard
        //mock de save que reciba passenger mockeado
        //construir comando con los mismos datos que la instancia mockeada
      //@ts-ignore  

      const passenger = {
         id: expect.any(String),
         fullName: "juan",
         email: "juan@gmail.com",
         identityCard: "0000"
      }

      passengerRepository.findOneByIdentityCard = jest.fn().mockResolvedValue(null);

      passengerRepository.save = jest.fn();

      await createPassengerHandler.execute(new CreatePassengerCommand(
        "juan",
        "juan@gmail.com",
        "0000"));

      expect(passengerRepository.save).toBeCalledTimes(1);
      expect(passengerRepository.save).toBeCalledWith(passenger);
    });
    it('should throw an error if the passenger already exists', async () => {

      const passengerMock = Passenger.create('Juan', 'juan@gmail.com', '090909');


      passengerRepository.findOneByIdentityCard = jest.fn().mockResolvedValue(passengerMock);
  
      const command = new CreatePassengerCommand(
        "juan",
        "juan@gmail.com",
        "0000"
      );

      await expect(createPassengerHandler.execute(command)).rejects.toStrictEqual(new Error('passenger already exists'));
    })
  })
    