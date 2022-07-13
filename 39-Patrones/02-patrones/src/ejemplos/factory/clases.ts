class Car {
  name;

  constructor(name: string) {
    this.name = name + '-' + Math.random().toString(36).substring(2, 15);
  }

  showInfo() {
    console.log(`I'm ${this.name}`);
  }
}

class Audi extends Car {
  constructor() {
    super('Audi');
  }
}

class BMW extends Car {
  constructor() {
    super('BMW');
  }
}

class Mercedes extends Car {
  constructor() {
    super('Mercedes');
  }
}

export class CarFactory {
  static create(type: string) {
    switch (type) {
      case 'Audi': {
        console.log('Creando clase Audi');
        return new Audi();
      }

      case 'BMW': {
        console.log('Creando clase BMW');
        return new BMW();
      }

      case 'Mercedes': {
        console.log('Creando clase Mercedes');
        return new Mercedes();
      }

      default: {
        console.log('Creando clase Mercedes POR DEFAULT');
        return new Mercedes();
      }
    }
  }
}
