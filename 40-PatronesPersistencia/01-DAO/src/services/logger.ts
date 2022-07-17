import { createLogger, transports, LoggerOptions, format } from 'winston';

const { timestamp, combine, errors, json } = format;

const logConfiguration: LoggerOptions = {
  transports: [
    new transports.Console({ level: 'info' }),
    new transports.File({
      filename: './logs/logging.log',
      level: 'error',
    }),
  ],
  format: combine(timestamp(), errors({ stack: true }), json()),
};

export const Logger = createLogger(logConfiguration);
