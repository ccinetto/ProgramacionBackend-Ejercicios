import winston from 'winston';
import Config from '../config';

const { createLogger, format, transports } = winston;
const { combine, timestamp, prettyPrint, colorize } = format;
const { Console, File } = transports;

const logFormat = winston.format.printf(function(info) {
  return `${info.timestamp}|${info.level}|${JSON.stringify(info.message, null, 4)}`;
});

const logConfiguration = {
  level: 'info',
  format: combine(colorize(), timestamp(), logFormat),
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
