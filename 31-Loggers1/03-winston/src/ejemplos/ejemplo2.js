// require Log4js
import winston from 'winston';
// Create the logger

/**
 * Ejemplo basico de Logging usando Winston
 * Podemos crear varios transportes para un mismo logger
 * Y a su vez configurarle a cada transporte su nivel
 * Podemos asignarle al Logger un nivel de default, por si algun transporte no define su nivel
 */
export const ejemplo2 = () => {
  const logConfiguration = {
    level: 'info',
    transports: [
      new winston.transports.Console({ level: 'verbose' }),
      new winston.transports.File({
        filename: './logs/example-2.log',
        level: 'error',
      }),
      new winston.transports.File({
        filename: './logs/example-3.log',
      }),
    ],
  };

  const logger = winston.createLogger(logConfiguration);

  // Log a message
  logger.silly('Imprimimos Silly');
  logger.debug('Imprimimos Debug');
  logger.verbose('Imprimimos Verbose');
  logger.info('Imprimimos Info');
  logger.warn('Imprimimos Warn');
  logger.error('Imprimimos Error');
};
