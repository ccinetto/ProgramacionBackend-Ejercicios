const delaySincronico = (ret) => {
  for (let i = 0n; i < 40000000n; i++);
};

function hacerTareaSincronicamente(num) {
  console.log(new Date(), 'Haciendo Tarea', num);
  delaySincronico(100);
  console.log(new Date(), 'Tarea', num, 'finalizada');

}

console.log('Inicio Tareas');
hacerTareaSincronicamente(1);
hacerTareaSincronicamente(2);
hacerTareaSincronicamente(3);
hacerTareaSincronicamente(4);
console.log('Fin Tareas');
console.log('Otras Tareas');
