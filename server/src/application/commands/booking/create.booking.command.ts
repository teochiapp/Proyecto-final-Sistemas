export class CreateBookingCommand {
    private readonly ownerId: string;
    private readonly passengersId: Array<string>;
    private readonly accomodationId: string;
    private readonly from: Date;
    private readonly to: Date;
  
    constructor(
        ownerId: string,
        passengersId: Array<string>,
        accomodationId: string,
        from: Date,
        to: Date
      
    ) {

        if (!ownerId) {
            throw new Error('owner is required');
        }
        if (!passengersId) {
            throw new Error('passengers are required');
        }
        if (!accomodationId) {
            throw new Error('accomodation is required');
        }
        if (!from || !to) {
            throw new Error('Dates are required');
        }

        this.ownerId = ownerId;
        this.passengersId = passengersId;
        this.accomodationId = accomodationId;
        this.from = from;
        this.to = to;
    
    }
  
    getOwnerId(): string {
      return this.ownerId;
    }
  
    getPassengersId(): Array<string> {
      return this.passengersId;
    }
  
    getAccomodationId(): string {
      return this.accomodationId;
    }

    getDateFrom(): Date{
        return this.from;
    }

    getDateTo(): Date{
        return this.to;
    }
  
   
  }