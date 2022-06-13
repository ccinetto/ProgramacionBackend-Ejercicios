import pino from 'pino';
// Create the logger

/**
 * Ejemplo basico de Logging usando PINO
 * Podemos crear loggers padres y loggers hijos que hereden las propiedades
 */
export const ejemplo4 = () => {
  const loggerPadre = pino({
    level: 'trace',
  });

  const loggerHijo = loggerPadre.child({ tipoLogger: 'Hijo' });
  const obj = {
    nombre: 'cristian',
    edad: 28,
  };

  loggerHijo.trace({
    mensaje: 'Imprimimos Trace',
    nombre: 'cristian',
    edad: 22,
  });
  loggerHijo.debug('Imprimimos Debug');
  loggerHijo.info('Imprimimos Info');
  loggerHijo.warn('Imprimimos Warn');
  loggerHijo.error('Imprimimos Error');
  loggerHijo.fatal(
    {
      mensaje: 'Imprimimos Fatal',
      nombre: 'cristian',
      edad: 22,
    },
    'esto es un mensaje adicional'
  );
};
