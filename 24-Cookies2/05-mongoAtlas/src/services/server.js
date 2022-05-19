import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mainRouter from '../routes';
import MongoStore from 'connect-mongo';
import config from '../config';
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const StoreOptions = {
  /* ----------------------------------------------------- */
  /*           Persistencia por redis database             */
  /* ----------------------------------------------------- */
  store: MongoStore.create({
    mongoUrl: config.MONGO_ATLAS_URL,
    mongoOptions: advancedOptions,
  }),
  /* ----------------------------------------------------- */

  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false /* ,
  cookie: {
      maxAge: 40000
  } */,
};

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(session(StoreOptions));

app.use('/api', mainRouter);

export default app;
