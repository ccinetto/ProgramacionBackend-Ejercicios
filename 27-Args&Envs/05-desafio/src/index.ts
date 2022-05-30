import yargs from 'yargs';
import { addCommand } from './handlers/suma';
import { subCommand } from './handlers/resta';
import { mulCommand } from './handlers/multiplicacion';
import { divCommand } from './handlers/division';

yargs.version('26.06.2011');

yargs.command(addCommand);
yargs.command(subCommand);
yargs.command(mulCommand);
yargs.command(divCommand);

yargs.parse();
