import {Request, Response} from "express";
import {UpdatePassengerCommand} from '../../../application/commands/passenger/update.passenger.command';
import updatePassengerHandler from '../../../application/handlers/passenger/update.passenger.handler'

class UpdatePassengerAction {
    async run (req: Request, res: Response){

        
        try{
            const command = new UpdatePassengerCommand(
                req.body.fullName,
                req.body.email,
                req.params.identityCard
            )
            try{
                await updatePassengerHandler.execute(command);
            } catch (error) {
                const {message} = error as Error;
                return res.status(404).json({message});
            }

            return res.status(200).json({message: "Passenger updated"});

        }catch(e){

            const {message} = e as Error;
            res.status(400).json({message});
        }
    }
}

export default new UpdatePassengerAction();