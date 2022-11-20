export class UpdatePassengerCommand {

  private readonly fullName: string;
  private readonly email: string;
  private readonly identityCard: string;

  constructor(
    
    fullName: string,
    email: string,
    identityCard: string,
  ) {
    

    if (!fullName) {
      throw new Error("a name must be specified");
    }

    if (!email) {
      throw new Error("email must be specified");
    }

    if (!identityCard) {
      throw new Error("identity card must be specified");
    }

    //this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.identityCard = identityCard;
  }



  getEmail() {
    return this.email;
  }

  getIdentityCard() {
    return this.identityCard;
  }

  getFullName() {
    return this.fullName;
  }


}