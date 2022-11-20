import { Accommodation } from "../../domain/entities/accommodation.entity";

class accommodationRepository{
  private accommodations : Accommodation[];
    
  constructor(){
        this.accommodations = [];

  }
    
  async findOneById(id: string): Promise<Accommodation | null> {
        const accommodations= this.accommodations.find(u => u.getId() === id);
    
        return (accommodations) ? accommodations : null;
  }

  async findOneByName(name: string): Promise<Accommodation | null>{
    const accommodation = this.accommodations.find(a => a.getName() === name)

    return (accommodation) ? accommodation : null;
}


  async findAll(): Promise<Accommodation[]> {
    return this.accommodations;
  }

  async save(Accommodation : Accommodation): Promise<void> {
    const savedAccommodation = this.accommodations.find(u => u.getId() === Accommodation.getId())

    if (savedAccommodation) {
      this.accommodations.splice(this.accommodations.indexOf(savedAccommodation), 1)
    }

    this.accommodations.push(Accommodation);
  }

 

}
export default new accommodationRepository();