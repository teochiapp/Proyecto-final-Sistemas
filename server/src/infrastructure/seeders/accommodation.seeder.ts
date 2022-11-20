import { Accommodation } from "../../domain/entities/accommodation.entity";
import accommodationRepository from "../repositories/accommodation.repository";

export class AccommodationSeeder {
    private accomodations: Array<Accommodation> = [];
    constructor() {
      this.accomodations.push(Accommodation.create('house', 200));
      this.accomodations.push(Accommodation.create('Apartament', 150));
     
    }
   
    public async generate(): Promise<void> {
      for (const accomodation of this.accomodations) {
        await accommodationRepository.save(accomodation);
      }
    }
  }
  