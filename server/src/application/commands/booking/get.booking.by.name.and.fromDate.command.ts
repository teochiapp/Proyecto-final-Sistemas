export class GetBookingByNameAndFromDateCommand{
    private readonly name: string;
    private readonly dateFrom: Date
    constructor(name: any, dateFrom: any){

        if(!name){
            throw new Error('name is required');
        }
        if(!dateFrom){
            throw new Error('date is required');
        }

        this.dateFrom = new Date(dateFrom);
        
        if (!(Object.prototype.toString.call(this.dateFrom) === '[object Date]')){
            throw new Error('invalid date');
        }

        


        this.name = name
        
    }

    getName(): string{
        return this.name;
    }
    getDateFrom(): Date{
        return this.dateFrom;
    }

}