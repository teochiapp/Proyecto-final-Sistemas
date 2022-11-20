export class CreatePassengerCommand {
    private readonly fullname: string;
    private readonly email: string;
    private readonly identityCard: string;
  
    constructor(
      fullname: string,
      email: string,
      identityCard: string
    ) {
      if (!fullname) {
        throw new Error('Name is required');
      }
      if (!email) {
        throw new Error('Email is required');
      }
      if (!identityCard) {
        throw new Error('Identity card is required');
      }
      
      this.fullname = fullname;
      this.email = email;
      this.identityCard = identityCard;
      
    }
  
    
  
    getFullName(): string {
      return this.fullname;
    }
  
    getEmail(): string {
      return this.email;
    }
  
    getIdentityCard(): string {
      return this.identityCard;
    }
  }