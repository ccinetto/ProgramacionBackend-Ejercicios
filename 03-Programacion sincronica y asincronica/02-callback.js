// A) Ejemplos de funciones que reciben funciones como argumentos
// Otros casos son MAP, FILTER, REDUCE, ETC

const subirSalarios = (empleado) => {
  if (empleado.antiguedad >= 1 && empleado.antiguedad < 3)
    empleado.salario = empleado.salario * 1.25;
  else if (empleado.antiguedad >= 3 && empleado.antiguedad < 5)
    empleado.salario = empleado.salario * 1.4;
  else if (empleado.antiguedad >= 5) empleado.salario = empleado.salario * 1.45;
  else console.log(`Al empleado ${empleado.nombre} no le toca aumento`);
};

const empleados = [
  {
    nombre: 'franco',
    antiguedad: 0,
    salario: 20,
  },
  {
    nombre: 'pepe',
    antiguedad: 1,
    salario: 20,
  },
  {
    nombre: 'juan',
    antiguedad: 2,
    salario: 20,
  },
  {
    nombre: 'carlos',
    antiguedad: 3,
    salario: 20,
  },
  {
    nombre: 'martin',
    antiguedad: 4,
    salario: 20,
  },
  {
    nombre: 'roman',
    antiguedad: 5,
    salario: 20,
  },
];

empleados.forEach(subirSalarios);
console.log(empleados);


//B) Funcion customizada que recibe una funcion como argumento y la llamo dentro de su logica

const logger = (mensaje) => {
    const fecha = new Date();
    console.log(`${fecha} : ${mensaje}`)
}


const miFuncion = (nombre, cb) => {
    const saludo = `Hola ${nombre}!!!!`;
    cb(saludo);
}

miFuncion('juan carlos', logger)

