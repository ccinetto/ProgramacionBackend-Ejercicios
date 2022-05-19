import config from '../config';
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mainRouter from '../routes';
import redis from 'redis';
import connectRedis from 'connect-redis';

const RedisStore = connectRedis(session);

const redisClient = redis.createClient({
  host: config.REDIS_URL,
  port: config.REDIS_PORT,
  password: config.REDIS_PSW,
});

const ttlSeconds = 180;

const StoreOptions = {
  store: new RedisStore({ client: redisClient }),
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
