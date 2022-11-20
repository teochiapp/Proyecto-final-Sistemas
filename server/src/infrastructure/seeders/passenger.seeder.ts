import { Passenger } from "../../domain/entities/passenger.entity";
import passengerRepository from "../repositories/passenger.repository";

export class PassengerSeeder {
    private passengers: Array<Passenger> = [];
    constructor() {
      this.passengers.push(Passenger.create( 'Pedro', 'pedro@gmail.com', '12345'));
      this.passengers.push(Passenger.create('Juan', 'juan@gmail.com', '12346'));
      this.passengers.push(Passenger.create( 'Marcos', 'marcos@gmail.com', '12347'));
      this.passengers.push(Passenger.create( 'Mateo','mateo@gmail.com', '12348'));
    }
   
    public async generate(): Promise<void> {
      for (const passenger of this.passengers) {
        await passengerRepository.save(passenger);
      }
    }
  }
  