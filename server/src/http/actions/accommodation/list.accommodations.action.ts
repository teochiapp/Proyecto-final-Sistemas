import {Request, Response} from "express";
import { Accommodation } from "../../../domain/entities/accommodation.entity";
import accommodationRepository from "../../../infrastructure/repositories/accommodation.repository";

class ListAccommodationsAction {
  async run(_req: Request, res: Response) {
    const accommodations: Accommodation[] = await accommodationRepository.findAll();

    const filteredAccommodations: object[] = accommodations.map(accommodation => ({...accommodation.toPrimitives()}));

    return res.status(200).json(filteredAccommodations);
  }
}

export default new ListAccommodationsAction();