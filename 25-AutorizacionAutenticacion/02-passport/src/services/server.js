import express from 'express';
import passport from 'passport';
import session from 'express-session';
import { signUpFunc, loginFunc } from './auth';
import mainRouter from '../routes';

const app = express();

//Muy Importante setear esto para leer los datos del body
app.use(express.json());

//Inicializacion basica de Express session
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  }),
);

//Indicamos que vamos a usar passport en todas nuestras rutas
app.use(passport.initialize());

//Permitimos que passport pueda manipular las sessiones de nuestra app
app.use(passport.session());

// loginFunc va a ser una funcion que vamos a crear y va a tener la logica de autenticacion
// Cuando un usuario se autentique correctamente, passport va a devolver en la session la info del usuario
passport.use('login', loginFunc);


//signUpFunc va a ser una funcion que vamos a crear y va a tener la logica de registro de nuevos usuarios
passport.use('signup', signUpFunc);


app.use('/api', mainRouter);

export default app;