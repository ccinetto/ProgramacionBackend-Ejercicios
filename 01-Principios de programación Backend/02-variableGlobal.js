let i = 'hola!, soy la variable global';

function foo() {
  console.log('dentro de la funcion', i);
}

console.log(i);
foo();
