import express from 'express';
import exphbs from 'express-handlebars';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import path from 'path';
import mainRouter from '../routes';

const app = express();

const publicPath = path.resolve(__dirname, '../../public');
app.use(express.static(publicPath));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
    },
  })
);

const layoutDirPath = path.resolve(__dirname, '../../views/layouts');
const defaultLayerPth = path.resolve(__dirname, '../../views/layouts/main.hbs');
const partialDirPath = path.resolve(__dirname, '../../views/partials');

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

app.use(mainRouter);

export default app;
