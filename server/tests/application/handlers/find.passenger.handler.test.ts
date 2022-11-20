import {Passenger} from "../../../src/domain/entities/passenger.entity";
import passengerRepository from "../../../src/infrastructure/repositories/passenger.repository";
import findPassengerHandler from '../../../src/application/handlers/passenger/list.passenger.handler'
import {ListPassengerCommand} from '../../../src/application/commands/passenger/list.passenger.command'
import {v4} from "uuid";

describe('Find Passenger Handler', () => {

  it('should be find passenger', async () => {
    const passengerMock = Passenger.create('Pepito perez', 'pepitoperez@yopmail.com', '12345678');
    passengerRepository.findOneById = jest.fn().mockResolvedValue(passengerMock);

    const result = await findPassengerHandler.execute(new ListPassengerCommand(v4()));

    expect(result).toStrictEqual(passengerMock);
  });
  it('should be thrown an error when passenger not found', async () => {
    passengerRepository.findOneById = jest.fn().mockResolvedValue(null);

    const command = new ListPassengerCommand(v4());

    await expect(findPassengerHandler.execute(command)).rejects.toStrictEqual(new Error('Passenger not found'));
  })
})
  