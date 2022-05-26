import express from 'express';
import mainRouter from '../routes';
import session from 'express-session';
import passport from 'passport';
import { loginFunc, signUpFunc } from './auth';
import MongoStore from 'connect-mongo';
import Config from '../config';

const app = express();

app.use(express.json());

const ttlSeconds = 180;

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: Config.MONGO_ATLAS_URL,
    // crypto: {
    //   secret: 'squirrel',
    // },
  }),
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000,
  },
};

app.use(session(StoreOptions));

//Indicamos que vamos a usar passport en todas nuestras rutas
app.use(passport.initialize());

//Permitimos que passport pueda manipular las sessiones de nuestra app
app.use(passport.session());

// Cuando un usuario se autentique correctamente, passport va a devolver en la session la info del usuario
passport.use('login', loginFunc);

//signUpFunc va a ser una funcion que vamos a crear y va a tener la logica de registro de nuevos usuarios
passport.use('signup', signUpFunc);

app.use('/api', mainRouter);

export default app;
