// require Log4js
import log4js from 'log4js';

/**
 * Ejemplo basico de Logging usando Log4Js
 * Aca los logs no se imprimen en la consola sino que se guardan en un archivo
 *
 * Appender:
 * Son las salidas a nuestros logs.
 * En este caso creamos una salida hacia un archivo (que le decimos cual es)
 *
 * Categories:
 * Para crear varios loggers. Cuando llamamos a getLogger y no le pasamos nada, estamos
 * pidiendo el logger "Default".
 * Aca configuramos el logger Default para utilizar el appender FileAppender que creamos
 * Y le decimos desde que nivel en adelante debe escribir los logs
 *
 */

export const ejemplo2 = () => {
  log4js.configure({
    appenders: {
      fileAppender: { type: 'file', filename: './logs/example-1.log' },
    },
    categories: {
      default: { appenders: ['fileAppender'], level: 'trace' },
    },
  });

  const logger = log4js.getLogger();

  // Log a message
  logger.trace('Imprimimos Trace');
  logger.debug('Imprimimos Debug');
  logger.info('Imprimimos Info');
  logger.warn('Imprimimos Warn');
  logger.error('Imprimimos Error');
  logger.fatal('Imprimimos Fatal');
};
