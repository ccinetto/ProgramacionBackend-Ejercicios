const Singleton = (function () {
  let instance: Object;

  function createInstance() {
    const object = new Object('I am the instance');
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        console.log('Instancia Nula. Inicializandola');
        instance = createInstance();
      } else console.log('Instancia Ya Inicializada. Reutilizandola');

      return instance;
    },
  };
})();

export const ejemploSingleton = () => {
  var instance1 = Singleton.getInstance();
  var instance2 = Singleton.getInstance();
  var instance3 = Singleton.getInstance();
  var instance4 = Singleton.getInstance();

  console.log(
    'Same instance? ' +
      (instance1 === instance2 &&
        instance2 === instance3 &&
        instance3 == instance4)
  );
};
