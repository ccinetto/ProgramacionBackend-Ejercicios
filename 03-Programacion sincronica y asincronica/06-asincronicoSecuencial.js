function hacerTarea(num, cb) {
  console.log(new Date(), 'Haciendo Tarea', num);
  setTimeout(() => {
      console.log(new Date(), 'Tarea', num, 'finalizada');
      cb();
  }, 1000);
}

console.log('inicio de tareas');

const callBack1 = () => {
  hacerTarea(2, callBack2);
};

const callBack2 = () => {
  hacerTarea(3, callBack3);
};

const callBack3 = () => {
  hacerTarea(4, callback4);
};

const callback4 = () => {
  console.log('Fin de tareas');
};

hacerTarea(1, callBack1);
console.log('Otras Tareas');
