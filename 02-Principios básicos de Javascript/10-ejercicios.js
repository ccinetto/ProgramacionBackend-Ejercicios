// 1
function mostrarLista(lista) {
  if (lista.length === 0) {
    console.log('lista vacía');
  } else {
    console.log(lista);
  }
}

mostrarLista([1, 2, 3]);
mostrarLista([]);

//2

(function mostrarLista(lista) {
  if (lista.length === 0) {
    console.log('lista vacía');
  } else {
    console.log(lista);
  }
})([1, 2, 3]);

// 3
function crearMultiplicador(num1) {
  return function (num2) {
    return num1 * num2;
  };
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log(duplicar(3));
console.log(duplicar(4));

console.log(triplicar(3));
console.log(triplicar(4));
