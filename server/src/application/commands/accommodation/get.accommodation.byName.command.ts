export class GetAccommodationByNameCommand {
    private readonly name: string;
  
    public constructor(
      name: string,
    ) {
      if (!name) {
        throw new Error('name is required');
      }
  
     
  
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  }