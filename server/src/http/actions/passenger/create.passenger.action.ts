import {Request, Response} from "express";
import {CreatePassengerCommand} from "../../../application/commands/passenger/create.passenger.command";
import createPassengerHandler from "../../../application/handlers/passenger/create.passenger.handler";


class CreatePassengerAction {
  async run(req: Request, res: Response) {
    const {fullName, email, identityCard} = req.body;

    try {
      const command = new CreatePassengerCommand(fullName, email, identityCard);

      await createPassengerHandler.execute(command);

      return res.status(201).json({message: "Passenger created"});
    } catch (e) {
      const {message} = e as Error;
      res.status(400).json({message: message});
    }


  }
}

export default new CreatePassengerAction();