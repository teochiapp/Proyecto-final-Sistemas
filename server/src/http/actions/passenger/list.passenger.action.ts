import {Request, Response} from "express";
import {Passenger} from "../../../domain/entities/passenger.entity";
import passengerRepository from "../../../infrastructure/repositories/passenger.repository";

class ListPassengersAction {
  async run(_req: Request, res: Response) {
    const passenger: Passenger[] = await passengerRepository.findAll();

    const filteredPassengers: object[] = passenger.map(passenger => ({...passenger.toPrimitives(), password: undefined}));

    return res.status(200).json(filteredPassengers);
  }
}

export default new ListPassengersAction();