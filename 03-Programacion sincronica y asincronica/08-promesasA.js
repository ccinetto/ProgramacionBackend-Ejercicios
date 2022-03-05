//Devuelve un numero aleatorio entre 2 numeros pasados por parametros
const between = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

//funcion que devuelve una promesa
//demora 4 segundos en responder
//Si el numero que genera es mayor a 5 finaliza la promesa de forma correcta, caso contrario finaliza con error
const funcionNumero = new Promise((resolve, reject) => {
  const number = between(0, 10);
  setTimeout(() => {
    if (number > 5) resolve(number);
    else reject(new Error(`${number} es menor/igual a 5`));
  }, 4000);
});

// const data = funcionNumero;

// console.log(data);

//Forma de trabajar con promesas
funcionNumero
  .then((resultado) => {
    console.log(`EL resultado es ${resultado}`);
  })
  .catch((err) => {
    console.log(`Hubo un Error: ${err}`);
  })
  .finally(() => {
    console.log('Esto se ejecuta si o si');
  });
