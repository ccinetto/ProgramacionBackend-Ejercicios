function classContador() {
  let contador = 0;

  const incrementar = function () {
    contador++;
    return contador;
  };

  const decrementar = function () {
    contador--;
    return contador;
  };

  const leer = function () {
    return contador;
  };

  return {
    incrementar,
    decrementar,
    leer,
  };
}

const contador1 = classContador();

const contador2 = classContador();

console.log(contador1.incrementar()); // Cual es la salida?
console.log(contador2.leer()); // Cual es la salida?
