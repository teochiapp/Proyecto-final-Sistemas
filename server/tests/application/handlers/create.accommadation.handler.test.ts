import { CreateAccommodationCommand } from "../../../src/application/commands/accommodation/create.accommodation.command"
import CreateAccommodationHandler from "../../../src/application/handlers/accommodation/create.accommodation.handler";
import accommodationRepository from "../../../src/infrastructure/repositories/accommodation.repository"
import { Accommodation } from "../../../src/domain/entities/accommodation.entity";
import createAccommodationHandler from "../../../src/application/handlers/accommodation/create.accommodation.handler";

describe('Create Passenger Handler', () => {

    it('should create a  passenger', async () => {

        //@ts-ignore 

        //generar instancia de passenger mockeada
        //generar mock del metodo find by idcard
        //mock de save que reciba passenger mockeado
        //construir comando con los mismos datos que la instancia mockeada
        //@ts-ignore  

        const accommodation = {
            id: expect.any(String),
            name: "house",
            pricePerNight: 200
        }

        accommodationRepository.findOneById = jest.fn().mockResolvedValue(null);

        accommodationRepository.save = jest.fn();

        await CreateAccommodationHandler.execute(new CreateAccommodationCommand(
            "house",
            200));

        expect(accommodationRepository.save).toBeCalledTimes(1);
        expect(accommodationRepository.save).toBeCalledWith(accommodation);
    });
})
