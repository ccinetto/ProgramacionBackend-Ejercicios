function sayHi(nombre) {
  console.log('Hola', nombre);
}

sayHi('juan carlos');

const jugadores = [
  {
    nombre: 'Lionel Messi',
    club: 'PSG',
  },
  {
    nombre: 'Cristiano Rolando',
    club: 'Manchester United',
  },
  {
    nombre: 'Robert Lewandowski',
    club: 'Bayern Munich',
  },
];

jugadores.forEach(function (unJugador) {
  console.log(
    `Boca Juniors acaba de contratar a ${unJugador.nombre}, proveniente del ${unJugador.club}`
  );
});

const miFuncionIteradora = function (unJugador) {
  console.log(
    `${unJugador.nombre}, proveniente del ${unJugador.club} esta feliz de jugar para Boca Juniors`
  );
};

jugadores.forEach(miFuncionIteradora);

const fs = require('fs');
const nombreArchivo = './04-scopeLet.js';

fs.readFile(nombreArchivo, function (err, file) {
  if (err) console.log('error', err);
  else console.log(file.toString());
});
