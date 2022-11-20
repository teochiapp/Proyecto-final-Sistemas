import {v4} from 'uuid';
import { Passenger } from './passenger.entity';
import { Accommodation } from './accommodation.entity';
import { bookingStatus } from '../enums/booking.status'

export class Booking {


  private id: string;
  private owner: Passenger;
  private passengers: Array<Passenger>;
  private accommodation: Accommodation;
  private from: Date;
  private to: Date;
  private status: string;



  constructor(
      id: string,
      owner: Passenger,
      passengers: Array<Passenger>,
      accommodation: Accommodation,        
      from: Date,
      to: Date

  ){

    this.id = id;
    this.owner = owner;
    this.passengers = passengers;
    this.accommodation = accommodation;
    this.status = bookingStatus.pending;
    this.from = from;
    this.to = to;        
    
    } 

    public static create(owner: Passenger, passengers: Array<Passenger>, accommodation: Accommodation, 
                          from: Date, to: Date): Booking{
        const id  = v4();
        const booking = new Booking(id, owner, passengers ,accommodation, from, to);
        return booking;
    }

    

    getId(): string {
      return this.id;
    }

    getOwner(): Passenger {
      return this.owner;
    }

    getPassengers(): Array<Passenger> {
      return this.passengers;
    }

    getFrom(): Date {
      return this.from;
    }

    getTo(): Date {
      return this.to;
    }

    getStatus(): string {
      return this.status;
    }

    toPrimitives(): any {
      return {
      id: this.id,
      owner: this.owner,
      passengers: this.passengers,
      accommodation: this.accommodation,        
      from: this.from,
      to: this.to,
      finalPrice: this.finalPrice()
      }
    }

    finalPrice(): number {
      const pricePerNight: number = this.accommodation.getPricePerNight();
      
      const fechaInicio = this.from.getTime();
      const fechaFin = this.to.getTime();

      const diff = fechaFin - fechaInicio;

      return Math.round(diff/(1000*60*60*24)) * pricePerNight;
      
    }

    changeStatus(status: string): void{
      this.status = status;

    
  } 
}
