import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import mainRouter from '../routes';

const FileStore = sessionFileStore(session);

const ttlSeconds = 180;

const fileStoreOptions = {
  //Lista completa de opciones en https://www.npmjs.com/package/session-file-store#options 
  store: new FileStore({ 
    path: './sesiones',       //The directory where the session files will be stored. Defaults to ./sessions
    ttl: ttlSeconds,          //Session time to live in seconds
    retries: 0,               //The number of retries to get session data from a session file. Defaults to 5
    reapInterval: 10,         //Interval to clear expired sessions in seconds or -1 if do not need. Defaults to 1 hour
  }),
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: ttlSeconds * 1000,
  }
};

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(session(fileStoreOptions));

app.use('/api', mainRouter);

export default app;
