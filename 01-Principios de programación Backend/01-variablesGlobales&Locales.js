var i = 'hola!, soy la variable global';

function foo() {
  var i = 'hola!, soy la variable local';
  console.log(i);
}

console.log(i);
foo();
console.log(i);
