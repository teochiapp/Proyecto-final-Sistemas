import { Request, Response } from "express";
import {CreateAccommodationCommand} from "../../../application/commands/accommodation/create.accommodation.command";
import createAccommodationHandler from "../../../application/handlers/accommodation/create.accommodation.handler";

class CreateAccommodationAction{
    async run(req: Request, res: Response){
        const {name, pricePerNight} = req.body;

        try{
            const command = new CreateAccommodationCommand(name, pricePerNight);

            await createAccommodationHandler.execute(command);
            
            return res.status(201).json({message: "Accommodation created"});
        }catch(e){
            
            const {message} = e as Error;
            res.status(400).json({message: message});

        }
        
    }
}


export default new CreateAccommodationAction();