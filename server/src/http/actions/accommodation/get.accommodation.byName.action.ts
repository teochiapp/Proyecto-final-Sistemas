import {Request, Response} from "express";
import {GetAccommodationByNameCommand} from  "../../../application/commands/accommodation/get.accommodation.byName.command";
import getAccomodationByNameHandler from "../../../application/handlers/accommodation/get.accommodation.byName.handler";


class GetAccomodationByNameAction {
    async run(req: Request, res: Response){

        try{
            const command: GetAccommodationByNameCommand = new GetAccommodationByNameCommand(req.params.name);

            try{

                const accommodation = await getAccomodationByNameHandler.execute(command);
                
                return res.status(200).json({
                    name: accommodation.getName(),
                    pricePerNight:  accommodation.getPricePerNight()
                });

            }catch(error){

                const {message} = error as Error;
                return res.status(404).json({message});
                

            }

        } catch (error){
            
            const {message} = error as Error;
            return res.status(404).json({message});

        }

    }

}


export default new GetAccomodationByNameAction();