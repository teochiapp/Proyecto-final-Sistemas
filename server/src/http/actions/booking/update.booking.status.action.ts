import { Request, Response } from "express";
import {UpdateBookingStatusCommand} from "../../../application/commands/booking/update.booking.status.command"
import updateBookingStatusHandler from "../../../application/handlers/booking/update.booking.status.handler";


class UpdateBookingStatusAction{
    async run(req: Request, res: Response){
        try{
            const command = new UpdateBookingStatusCommand(
                req.params.id,
                req.body.status
            )

            try{
                await updateBookingStatusHandler.execute(command);
            } catch (error) {
                const {message} = error as Error;
                return res.status(404).json({message});
            }

            return res.status(200).json({message: "Booking status updated"});


        }catch(e){
            const {message} = e as Error;
            res.status(400).json({message});
        }
    }

}

export default new UpdateBookingStatusAction();