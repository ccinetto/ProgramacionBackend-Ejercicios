// require Log4js
import winston from 'winston';
// Create the logger

/**
 * Ejemplo basico de Logging usando Winston
 * Aca solo imprimimos en consola
 * Dependiendo el nivel que especifiquemos, vamos a ver los logs, desde
 * ese nivel para arriba
 */
export const ejemplo1 = () => {
  const logConfiguration = {
    transports: [new winston.transports.Console()],
  };

  const logger = winston.createLogger(logConfiguration);

  logger.level = 'debug';

  // Log a message
  logger.silly('Imprimimos Silly');
  logger.debug('Imprimimos Debug');
  logger.verbose('Imprimimos Verbose');
  logger.info('Imprimimos Info');
  logger.warn('Imprimimos Warn');
  logger.error('Imprimimos Error');
};
