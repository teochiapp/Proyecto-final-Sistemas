export class UpdateBookingStatusCommand{
    private readonly id: string;
    private readonly status: string; 

    public constructor(id: string, status: string){

        if(!id){
            throw new Error('id is required');
        }

        if(!status){
            throw new Error('status is required');
        }

        this.id = id;
        this.status = status;
    }

    getId(): string{
        return this.id;
    }

    getStatus(): string{
        return this.status;
    }

}