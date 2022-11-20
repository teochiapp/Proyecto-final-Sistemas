import {Request, Response} from 'express';
import {GetBookingByNameAndFromDateCommand} from "../../../application/commands/booking/get.booking.by.name.and.fromDate.command"
import getBookingByNameAndFromDateHandler from '../../../application/handlers/booking/get.booking.by.name.and.fromDate.handler';

class GetBookingByNameAndFromDate{
    async run(req: Request, res: Response){
        try{

            const name = req.query.name;
            const dateFrom = req.query.dateFrom;

            const command = new GetBookingByNameAndFromDateCommand(name, dateFrom);
            

            try{
                const booking = await getBookingByNameAndFromDateHandler.execute(command);
                
                const bookingData: Object[] =  {...booking.toPrimitives()};

                return res.status(200).json(bookingData);


            }catch(error){
                const {message} = error as Error;
                return res.status(404).json({message});
            }
        }catch(e){
            const {message} = e as Error;
            res.status(400).json({message});
        }
    }
}


export default new GetBookingByNameAndFromDate();