const modularPattern = (function () {
  let sum = 0;

  return {
    add: function () {
      sum = sum + 1;
    },
    reset: function () {
      sum = 0;
    },
    getValue: function () {
      return sum;
    },
  };
})();

export const EjemploIIFE1 = () => {
  // /**Notar que si descomentamos esto typescript nos dice que no existe */
  // console.log(modularPattern.sum);
  console.log(`El valor actual es ${modularPattern.getValue()}`);
  modularPattern.add(); // console.logs: 1
  console.log(`El valor actual es ${modularPattern.getValue()}`);
  modularPattern.add(); // console.logs: 1
  console.log(`El valor actual es ${modularPattern.getValue()}`);
  modularPattern.reset(); // console.logs: 1
  console.log(`El valor actual es ${modularPattern.getValue()}`);
};
