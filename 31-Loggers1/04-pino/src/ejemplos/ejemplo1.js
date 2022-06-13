import pino from 'pino';
// Create the logger

/**
 * Ejemplo basico de Logging usando PINO
 * Aca solo imprimimos en consola
 * Dependiendo el nivel que especifiquemos, vamos a ver los logs, desde
 * ese nivel para arriba
 */
export const ejemplo1 = () => {
  const logger = pino({ level: 'info' });

  logger.trace('Imprimimos Trace');
  logger.debug('Imprimimos Debug');
  logger.info('Imprimimos Info');
  logger.warn('Imprimimos Warn');
  logger.error('Imprimimos Error');
  logger.fatal('Imprimimos Fatal');
};
