const contador = (function () {
  let contador = 0;

  const incrementar = function () {
    contador++;
  };

  const decrementar = function () {
    contador--;
  };

  const leer = function () {
    return contador;
  };

  return {
    incrementar,
    decrementar,
    leer,
  };
})();

contador.incrementar();
console.log(contador.leer());
contador.incrementar();
console.log(contador.leer());
contador.incrementar();
console.log(contador.leer());
