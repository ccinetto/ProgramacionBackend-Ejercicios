import winston from 'winston';
import Config from '../config';

const { createLogger, format, transports } = winston;
const { combine, timestamp, prettyPrint } = format;
const { Console, File } = transports;

const logConfiguration = {
  level: 'info',
  format: combine(timestamp(), prettyPrint()),
  transports: [new Console({ level: 'info' })],
};

const logger = createLogger(logConfiguration);

if (Config.NODE_ENV !== 'development') {
  logger.add(
    new File({
      filename: './logs/errors.log',
      level: 'error',
    }),
  );

  logger.add(
    new File({
      filename: './logs/logs.log',
    }),
  );
}

export default logger;
