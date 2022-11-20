import { Request, Response } from "express";
import {CreateBookingCommand} from "../../../application/commands/booking/create.booking.command";
import createBookingHandler from "../../../application/handlers/booking/create.booking.handler";

class CreateBookingAction{
    async run(req: Request, res: Response){

        const{ownerId,passengersId,accomodationId,from,to} = req.body;

        try{
            const command =  new CreateBookingCommand(ownerId,passengersId,accomodationId,new Date(from),new Date(to));

            await createBookingHandler.execute(command);

            return res.status(201).json({message: "Booking created"});


        }catch (e){
            
            const {message} = e as Error;
            res.status(400).json({message: message});
        }
    }
}

export default new CreateBookingAction();