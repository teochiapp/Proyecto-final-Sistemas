import { Booking } from "../../domain/entities/booking.entity";

class BookingRepository{
    private bookings: Booking[];

    constructor(){
        this.bookings = [];
    }


    async save(booking: Booking): Promise<void>{
        const savedBooking = this.bookings.find(b => b.getId() === booking.getId())

        if(savedBooking){
            this.bookings.splice(this.bookings.indexOf(savedBooking), 1);
        }

        this.bookings.push(booking);
    }

    async findOneById(id: string): Promise<Booking | null> {
        const booking = this.bookings.find(b => b.getId() === id);
    
        return (booking) ? booking : null;
    }

    
    async findAll(): Promise<Booking[]> {
        return this.bookings;
      }
    

    
    async findOneFromNameAndFromDate(name: string, dateFrom: Date): Promise<Booking | null> {

        const findBooking = this.bookings.find(b => b.getOwner().getFullname() === name && b.getFrom().getTime() === dateFrom.getTime());

        return (findBooking)? findBooking : null;
    }
}

export default new BookingRepository();