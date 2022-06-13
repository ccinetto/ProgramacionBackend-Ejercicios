import pino from 'pino';
// Create the logger

/**
 * Ejemplo basico de Logging usando PINO
 * Podemos pasarle valores interpolados
 */
export const ejemplo3 = () => {
  const logger = pino({
    level: 'trace',
  });

  const obj = {
    nombre: 'cristian',
    edad: 28,
  };

  logger.debug('el nombre es %s', obj.nombre);
  logger.info('la edad es %d', obj.edad);
  logger.warn('el objeto es %o', obj);
};
