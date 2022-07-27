import { Tareas } from "./utils/tareas";

const tarea = new Tareas();

tarea.add('Hacer cama');
tarea.add('Hacer hamburguesas');

tarea.complete('Hacer cama');


tarea.saveToFileCb((err, response) => {
  console.log('Guardado OK')
})