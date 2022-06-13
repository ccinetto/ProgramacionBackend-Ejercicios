import pino from 'pino';
// Create the logger

/**
 * Ejemplo basico de Logging usando PINO
 * Pino te permite pasarle un objeto y te lo deserializa para que se pueda observar toda la data que le pasas
 * Ademas del objeto, podemos pasarle un string y por defecto lo asocia a la key msg
 */
export const ejemplo2 = () => {
  const logger = pino({ level: 'trace' });

  logger.trace({
    mensaje: 'Imprimimos Trace',
    nombre: 'cristian',
    edad: 22,
  });
  logger.debug('Imprimimos Debug');
  logger.info('Imprimimos Info');
  logger.warn('Imprimimos Warn');
  logger.error('Imprimimos Error');
  logger.fatal(
    {
      mensaje: 'Imprimimos Fatal',
      nombre: 'cristian',
      edad: 22,
    },
    'esto es un mensaje adicional'
  );
};
