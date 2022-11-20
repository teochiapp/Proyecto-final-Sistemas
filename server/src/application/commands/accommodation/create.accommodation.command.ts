export class CreateAccommodationCommand{
    private readonly name;
    private readonly pricePerNight;

    constructor(name: string, pricePerNight: number){
        
        if(!name || !pricePerNight){
            throw new Error('name and price are required')
        }
        this.name = name;
        this.pricePerNight = pricePerNight;

    }

    getName(): string{
        return this.name;
    }
    getPricePerNight(): number {
        return this.pricePerNight;
    }
}