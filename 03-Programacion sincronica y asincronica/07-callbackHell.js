const hacerTarea = (num, cb) => {
  console.log(new Date(), 'Haciendo Tarea', num);
  setTimeout(() => {
      console.log(new Date(), 'Tarea', num, 'finalizada');
      cb();
  }, 1000);
}


hacerTarea(1, () => {
  console.log("Finalice la primer tarea secuencial");
  hacerTarea(2, () => {
    "Finalice la segunda tarea secuencial";
    hacerTarea(3, () => {
      "Finalice la tercer tarea secuencial";
    })
  })
})
