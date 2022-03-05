const delayASincronico = (timeDelay, f) => {
  setTimeout(f, timeDelay)
};

function hacerTareaASincronicamente(num) {
  console.log(new Date(), 'Haciendo Tarea', num);
  delayASincronico(100, () => console.log(new Date(), 'Tarea', num, 'finalizada'));
}

console.log('Inicio Tareas');
hacerTareaASincronicamente(1);
hacerTareaASincronicamente(2);
hacerTareaASincronicamente(3);
hacerTareaASincronicamente(4);
console.log('Fin Tareas');
console.log('Otras Tareas');
