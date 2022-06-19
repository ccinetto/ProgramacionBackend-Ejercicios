// require Log4js
import log4js from 'log4js';

/**
 * Ejemplo basico de Logging usando Log4Js
 * Aca vemos que podemos asignarle a un logger varias salidas
 * Es similar al ejemplo2, solo que ahora le decimos que queremos que el logger
 * imprima en consola, ademas de guardar los logs en un archivo
 */
export const ejemplo3 = () => {
  log4js.configure({
    appenders: {
      fileAppender: { type: 'file', filename: './logs/example-1.log' },
      consola: { type: 'console' },
    },
    categories: {
      default: { appenders: ['fileAppender', 'consola'], level: 'info' },
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
