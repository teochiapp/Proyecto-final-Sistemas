import express from 'express';
import CommonRoutes from './http/routes/common.routes';
import cors from 'cors';
import { log } from 'debug';
import expressWinston from 'express-winston';
import winston from 'winston';
import {PassengerSeeder} from './infrastructure/seeders/passenger.seeder';
import { AccommodationSeeder } from './infrastructure/seeders/accommodation.seeder';
import PassengerRoutes from './http/routes/passenger.routes';
import AccommodationRoutes from './http/routes/accommodation.routes';
import BookingRoutes from './http/routes/booking.routes';

new PassengerSeeder().generate();
new AccommodationSeeder().generate();

const app: express.Application = express();

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
      winston.format.json(),
      winston.format.prettyPrint(),
      winston.format.colorize({ all: true })
  ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

app.use(expressWinston.logger(loggerOptions));

const routes: Array<CommonRoutes> = [];
app.use(cors());
app.use(express.json());

// Add router
routes.push(new PassengerRoutes(app));
routes.push(new AccommodationRoutes(app));
routes.push(new BookingRoutes(app));

app.listen(3000, () => {
  routes.forEach((route: CommonRoutes) => {
    log(`Routes configured for ${route.getName()}`);
  });
  log('Server listening on port 3000');
});
