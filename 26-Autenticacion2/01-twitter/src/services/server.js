import path from 'path';
import {engine as exphbs} from 'express-handlebars';
import express from 'express';
import mainRouter from '../routes';
import session from 'express-session';
import passport from 'passport';
import { twitterLogin } from './auth';
import MongoStore from 'connect-mongo';
import Config from '../config';

const app = express();

app.use(express.json());

/** Configuracion de HBS y carpeta public*/
const publicPath = path.resolve(__dirname, '../../public');
app.use(express.static(publicPath));

const viewsPath = path.resolve(__dirname, '../../views');
const layoutDirPath = viewsPath + '/layouts';
const defaultLayerPth = viewsPath + '/layouts/main.hbs';
const partialDirPath = viewsPath + '/partials';

app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    layoutsDir: layoutDirPath,
    extname: 'hbs',
    defaultLayout: defaultLayerPth,
    partialsDir: partialDirPath,
  })
);



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

passport.use(twitterLogin)


app.use('/api', mainRouter);

export default app;
