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

  const loggerHijo = loggerPadre.child({ hijo: true });
  const obj = {
    nombre: 'cristian',
    edad: 28,
  };

  loggerPadre.trace({
    mensaje: 'Imprimimos Trace',
    nombre: 'cristian',
    edad: 22,
  });
  loggerHijo.debug('Imprimimos Debug');
  loggerPadre.info('Imprimimos Info');
  loggerHijo.warn('Imprimimos Warn');
  loggerPadre.error('Imprimimos Error');
  loggerHijo.fatal(
    {
      mensaje: 'Imprimimos Fatal',
      nombre: 'cristian',
      edad: 22,
    },
    'esto es un mensaje adicional'
  );
};
