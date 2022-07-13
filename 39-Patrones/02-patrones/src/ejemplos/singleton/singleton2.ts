/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class Singleton {
  private static instance: Singleton;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {}

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public someBusinessLogic() {
    // ...
  }
}

export const ejemploSingleton2 = () => {
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
