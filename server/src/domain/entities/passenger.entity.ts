import {v4} from 'uuid';
export class Passenger {

    private id: string;
    private fullName: string;
    private email: string;
    private identityCard: string;

    constructor(
        id: string,
        fullName: string,
        email: string,
        identityCard: string
    ){
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.identityCard = identityCard;
    }

    public static create(fullName: string,email: string,identityCard: string): Passenger{
        const id  = v4();
        const passenger = new Passenger(id, fullName, email, identityCard);
        return passenger;
    }

    static fromPrimitives(primitives: any): Passenger{
        const passenger = new Passenger(primitives.id, primitives.email,primitives.identityCard,primitives.fullName);


        return passenger;
      }

      changeEmail(email: string): void {
        this.email = email;
        
      }

      changeNames(fullName: string): void {
       
        this.fullName = fullName;
      }

      getId(): string {
        return this.id;
      }

      getEmail(): string {
        return this.email;
      }

      getIdentityCard(): string {
        return this.identityCard;
      }

      getFullname(): string{
        return this.fullName;
      }


      toPrimitives(): any {
        return {
          id: this.id,
          name: this.fullName,
          email: this.email,
          identityCard: this.identityCard,
          
        }
      }
}
