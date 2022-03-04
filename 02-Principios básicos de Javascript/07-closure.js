const crearGritarNombre = function (nombre) {
  const exclamaciones = '!!!!';
  return function () {
    console.log(`${nombre}${exclamaciones}`);
  };
};

console.log(crearGritarNombre);

const a = crearGritarNombre('pepe');
const b = crearGritarNombre('juan');

a();
b();
