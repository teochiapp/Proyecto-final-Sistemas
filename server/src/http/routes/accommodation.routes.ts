import { Application } from "express";
import updateAccommodationAction from "../actions/accommodation/update.accommodation.action";
import getAccommodationByNameAction from "../actions/accommodation/get.accommodation.byName.action";
import CommonRoutes from "./common.routes";
import createAccommodationAction from "../actions/accommodation/create.accommodation.action";
import listAccommodationsAction from "../actions/accommodation/list.accommodations.action";


class AccommodationRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'Accommodation');
  }

  setUpRoutes(): Application {
    this.app.post('/accommodation', createAccommodationAction.run);
    this.app.put('/accommodation/:id', updateAccommodationAction.run);
    this.app.get('/accommodation/:name', getAccommodationByNameAction.run);
    this.app.get('/accommodations', listAccommodationsAction.run);

    return this.app;
  }
}

export default AccommodationRoutes;