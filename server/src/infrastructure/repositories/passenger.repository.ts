import {Passenger} from "../../domain/entities/passenger.entity";

class passengerRepository {
  private passengers: Passenger[];

  constructor() {
    this.passengers = [];

  }

  async findOneById(id: string): Promise<Passenger | null> {
    const passenger = this.passengers.find(u => u.getId() === id);

    return (passenger) ? passenger : null;
  }

  async findOneByIdentityCard(identityCard: string): Promise<Passenger | null> {
    const passenger = this.passengers.find(u => u.getIdentityCard() === identityCard);

    return (passenger) ? passenger : null;
  }

  async findOneByName(name: string): Promise<Passenger | null> {
    const passenger = this.passengers.find(u => u.getFullname() === name);

    return (passenger) ? passenger : null;
  }

  async findAll(): Promise<Passenger[]> {
    return this.passengers;
  }

  async save(passenger: Passenger): Promise<void> {
    const savedPassenger = this.passengers.find(u => u.getId() === passenger.getId())

    if (savedPassenger) {
      this.passengers.splice(this.passengers.indexOf(savedPassenger), 1)
    }

    this.passengers.push(passenger);
  }

}

export default new passengerRepository();


