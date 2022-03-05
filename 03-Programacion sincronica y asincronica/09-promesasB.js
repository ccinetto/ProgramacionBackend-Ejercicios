const between = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const funcionNumeroConParametros = (params) => {
  return new Promise((resolve, reject) => {
    const number = between(0, 10);
    setTimeout(
      () =>
        number > 5
          ? resolve(number)
          : reject(new Error(`${number} es menor/igual a 5`)),
      params
    );
  });
};

console.log(miFuncion(4));

// console.log(new Date());

// funcionNumeroConParametros(10000)
//   .then((resultado) => {
//     console.log(new Date());
//     console.log(`EL resultado es ${resultado}`);
//   })
//   .catch((err) => {
//     console.log(`Hubo un Error: ${err}`);
//   });
