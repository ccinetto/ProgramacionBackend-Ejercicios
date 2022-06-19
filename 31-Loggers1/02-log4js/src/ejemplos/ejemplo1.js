// require Log4js
import log4js from 'log4js';
// Create the logger

/**
 * Ejemplo basico de Logging usando Log4Js
 * Aca solo imprimimos en consola
 * Dependiendo el nivel que especifiquemos, vamos a ver los logs, desde
 * ese nivel para arriba
 */
export const ejemplo1 = () => {
  const logger = log4js.getLogger();

  logger.level = 'trace';

  // Log a message
  logger.trace('Imprimimos Trace');
  logger.debug('Imprimimos Debug');
  logger.info('Imprimimos Info');
  logger.warn('Imprimimos Warn');
  logger.error('Imprimimos Error');
  logger.fatal('Imprimimos Fatal');
};
