import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mainRouter from '../routes';
import MongoStore from 'connect-mongo';

const ttlSeconds = 180;

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost/coderhouse',
    crypto: {
      secret: 'squirrel',
    },
  }),
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000,
  },
};

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(session(StoreOptions));

app.use('/api', mainRouter);

export default app;
