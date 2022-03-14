//Devuelve un numero aleatorio entre 2 numeros pasados por parametros
//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
const between = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

const limiteInferior = 1;
const limiteSuperior = 21;
const salida = {};

for(let i =0; i<10000; i++){
    const valor = between(limiteInferior,limiteSuperior);

    if(salida[valor])
        salida[valor] = salida[valor]+1;
    else
        salida[valor] = 1;
}

console.log(salida);