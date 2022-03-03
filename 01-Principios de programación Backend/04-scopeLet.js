let variable = 'global';

function miFuncionCopada() {
  let nombre = 'juan carlos';

  if (true) {
    let edad = 4;
    variable = 'la modifique';
    console.log(variable);
    console.log(nombre);
    console.log(edad);
  }

  //   console.log(edad);
}

miFuncionCopada();

// console.log(edad);
