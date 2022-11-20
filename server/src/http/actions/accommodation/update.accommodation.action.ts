import {Request, Response} from "express";
import { UpdateAccommodationCommand } from "../../../application/commands/accommodation/update.accommodation.command";
 import updateAccommodationHandler from "../../../application/handlers/accommodation/update.accommodation.handler";

class UpdateAccommodationAction {
  async run(req: Request, res: Response) {

    try {
      const command = new UpdateAccommodationCommand(
        req.params.id,
        req.body.name,
        req.body.pricePerNight
      );

      try {
        await updateAccommodationHandler.execute(command);
      } catch (error) {

        const {message} = error as Error;
        return res.status(404).json({message});

      }

      return res.status(200).json({message: "accommodation updated"});
      
    } catch (e) {
      const {message} = e as Error;
      res.status(400).json({message});
    }
  }
}

export default new UpdateAccommodationAction();