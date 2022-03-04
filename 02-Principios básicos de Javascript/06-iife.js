//FUNCION IIFE - ¿Como Crearlas?
// 1) Creamos la funcion anonima
// 2) La encerramos entre parentesis
// 3) La invocamos con () al final

(function () {
  console.log('HOLA');
})();

(function (a, b) {
  console.log(a + b);
})(1, 2);
