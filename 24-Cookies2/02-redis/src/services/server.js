import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import connectRedis from 'connect-redis';
import redis from 'redis';
import mainRouter from '../routes';

//1) Asociamos la libreria connect-redis con la libreria de express-session
const RedisStore = connectRedis(session);

//2) Creamos el cliente de redis pasandole host y port
const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379,
});

//Creamos las opciones de nuestra session pasandole el cliente de redis creado en el punto 2)
const ttlSeconds = 180;

const StoreOptions = {
  store: new RedisStore({ 
    client: redisClient,                      //An instance of redis or a redis compatible client.
    prefix: 'session:',                       //Key prefix in Redis (default: sess:).
    ttl: ttlSeconds
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
app.use(session(StoreOptions));

app.use('/api', mainRouter);

export default app;
