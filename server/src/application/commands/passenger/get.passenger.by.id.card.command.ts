export class GetPassengerByIdCardCommand {
    private readonly idCard: string;
  
    public constructor(
      idCard: string,
    ) {
      if (!idCard) {
        throw new Error('id is required');
      }
  
      
      this.idCard = idCard;
    }
  
    getIdCard() {
      return this.idCard;
    }
  }