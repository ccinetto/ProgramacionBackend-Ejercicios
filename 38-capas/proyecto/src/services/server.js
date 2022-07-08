import express from 'express';
import passport from 'passport';
import session from 'express-session';
import { signUpFunc, loginFunc } from './auth';
import mainRouter from '../routes';
import Logger from './logger';

const app = express();

app.use(express.json());

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.use('login', loginFunc);
passport.use('signup', signUpFunc);

app.use('/api', mainRouter);

app.use(function (err, req, res, next) {
  const status = err.statusCode || 500;
  const msg = err.message || 'Internal Server Error';

  Logger.error(err);
  res.status(status).send({ msg });
});

export default app;
