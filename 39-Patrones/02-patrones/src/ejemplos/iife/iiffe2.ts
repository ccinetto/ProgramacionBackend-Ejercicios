interface ObjetoI {
  name: string;
  price: number;
}

const basketModule = (function () {
  const basket: ObjetoI[] = [];

  function doSomethingPrivate() {
    console.log('HACIENDO ALGO PRIVADO');
  }

  // Return an object exposed to the public
  return {
    // Add items to our basket
    addItem: function (values: ObjetoI) {
      basket.push(values);
    },

    // Get the count of items in the basket
    getItemCount: function () {
      return basket.length;
    },

    // Public alias to a private function
    doSomething: doSomethingPrivate,

    // Get the total value of items in the basket
    getTotal: function () {
      var q = this.getItemCount(),
        p = 0;

      while (q--) {
        p += basket[q].price;
      }

      return p;
    },
  };
})();

export const EjemploIIFE2 = () => {
  const obj = [
    {
      name: 'Papas',
      price: 22,
    },
    {
      name: 'Peras',
      price: 30,
    },
    {
      name: 'Manzanas',
      price: 12,
    },
  ];

  obj.forEach((anObj) => basketModule.addItem(anObj));

  console.log(basketModule.getTotal());
  console.log(basketModule.getItemCount());
  basketModule.doSomething();

  /**Notar que si descomentamos estas dos lineas typescript nos dice que no existe */
  // console.log(basketModule.doSomethingPrivate())
  // console.log(basketModule.basket);
};
