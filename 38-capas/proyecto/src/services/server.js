import express from 'express';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import session from 'express-session';
import Config from '../config';
import { signUpFunc, loginFunc } from './auth';
import mainRouter from '../routes';
import Logger from './logger';

const app = express();

app.use(express.json());

const ttlSeconds = 1800;

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: Config.MONGO_ATLAS_URL,
    crypto: {
      secret: Config.SESSION_SECRET_KEY,
    },
  }),
  secret: Config.SESSION_SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000,
  },
};

app.use(session(StoreOptions));

app.use(passport.initialize());
app.use(passport.session());

passport.use('login', loginFunc);
passport.use('signup', signUpFunc);

app.use('/api', mainRouter);

app.use(function (err, req, res, next) {
  const status = err.statusCode || 500;
  const msg = err.message || 'Internal Server Error';
  const stack = err.stack;
  Logger.error(err);
  res.status(status).send({ msg, stack });
});

export default app;
