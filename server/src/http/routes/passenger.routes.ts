import { Application } from "express";
import listPassengerAction from "../actions/passenger/list.passenger.action";
import createPassengerAction from "../actions/passenger/create.passenger.action";
import CommonRoutes from "./common.routes";
import getPassengerByIdCardAction from "../actions/passenger/get.passenger.by.id.card.action";
import updatePassengerAction from "../actions/passenger/update.passenger.action";


class PassengerRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'Passenger');
  }

  setUpRoutes(): Application {
    this.app.post('/passengers', createPassengerAction.run);
    this.app.get('/passengers', listPassengerAction.run);
    this.app.get('/passengers/:identityCard', getPassengerByIdCardAction.run);
    this.app.put('/passengers/:identityCard', updatePassengerAction.run);



    return this.app;
  }
}

export default PassengerRoutes;