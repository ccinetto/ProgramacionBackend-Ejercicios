import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'

//hideBin is a shorthand for process.argv.slice(2)
const argv = yargs(hideBin(process.argv)).argv

console.log('\n\nArgumentos de YARGS');
console.log(argv);

if (argv.ships > 3 && argv.distance < 53.5) {
  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers!')
}