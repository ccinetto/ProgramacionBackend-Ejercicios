import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mainRouter from '../routes';
import MongoStore from 'connect-mongo';

const StoreOptions = {
  /* ----------------------------------------------------- */
  /*           Persistencia por redis database             */
  /* ----------------------------------------------------- */
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/coderhouse' }),
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
