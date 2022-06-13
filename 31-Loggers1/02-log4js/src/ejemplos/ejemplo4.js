// require Log4js
import log4js from 'log4js';

/**
 * Ejemplo basico de Logging usando Log4Js
 * Ademas del logger de default, podemos crear otros loggers
 * Para utilizar dichos loggers, tenemos que pasarle por parametro a getLogger el nombre
 */

export const ejemplo4 = () => {
  log4js.configure({
    appenders: {
      fileAppender: { type: 'file', filename: './logs/example-1.log' },
      consola: { type: 'console' },
    },
    categories: {
      default: { appenders: ['fileAppender', 'consola'], level: 'error' },
      miLoggerPersonalizado: { appenders: ['consola'], level: 'info' },
    },
  });

  const logger = log4js.getLogger('miLoggerPersonalizado');

  logger.level = 'warn';

  // Log a message
  logger.trace('Imprimimos Trace');
  logger.debug('Imprimimos Debug');
  logger.info('Imprimimos Info');
  logger.warn('Imprimimos Warn');
  logger.error('Imprimimos Error');
  logger.fatal('Imprimimos Fatal');
};
