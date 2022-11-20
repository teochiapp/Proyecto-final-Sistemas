import {Request, Response} from 'express';
import {Passenger} from '../../../domain/entities/passenger.entity';
import {GetPassengerByIdCardCommand} from '../../../application/commands/passenger/get.passenger.by.id.card.command';
import getPassengerByIdCardHandler from '../../../application/handlers/passenger/get.passenger.by.id.card.handler';

class GetPassengerByIdCardAction{
    async run(req: Request, res: Response){

        
        try{
            const command: GetPassengerByIdCardCommand = new GetPassengerByIdCardCommand(req.params.identityCard);

            try{
                const passenger : Passenger = await getPassengerByIdCardHandler.execute(command);

                const passengerData: object[] = {...passenger.toPrimitives()};

                return res.status(200).json(passengerData);
            }catch(error){
                const {message} = error as Error;
                return res.status(404).json({message});
            }
            
            
        }catch(e){
            const {message} = e as Error;
            return res.status(400).json({message});
        }
        

        

        
    }
}


export default new GetPassengerByIdCardAction();