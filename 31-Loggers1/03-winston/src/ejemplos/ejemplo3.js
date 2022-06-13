// require Log4js
import winston from 'winston';
// Create the logger

const { createLogger, format, transports } = winston;
const { combine, printf, timestamp, colorize } = format;
/**
 * Ejemplo basico de Logging usando Winston
 * Aca solo imprimimos en consola
 * con format podemos agregarle info extra (ej el timestamp) o definir como va a ser la salida
 * Tambien podemos imprimir la salida en el formato que querramos
 */

export const ejemplo3 = () => {
  const logConfiguration = {
    level: 'debug',
    format: combine(
      timestamp({
        format: 'MMM-DD-YYYY HH:mm:ss',
      }),
      colorize(),
      printf((info) => `${info.level} |  ${[info.timestamp]} | ${info.message}`)
    ),
    transports: [new transports.Console()],
  };

  const logger = createLogger(logConfiguration);

  // Log a message
  logger.silly('Imprimimos Silly');
  logger.debug('Imprimimos Debug');
  logger.verbose('Imprimimos Verbose');
  logger.info('Imprimimos Info');
  logger.warn('Imprimimos Warn');
  logger.error('Imprimimos Error');
};
