import { Tareas } from '../utils/tareas';
import { strict as assert } from 'assert';
import fs from 'fs';
import path from 'path/posix';

describe('comprobando que saveToFileCb() funcione bien', function () {
  it('debería guardar una tarea en el archivo tareas.txt', function (done) {
    const todos = new Tareas();
    const todosFilePath = path.resolve(__dirname, '../../tareas.json');

    const contenido = 'mi tarea de prueba';
    const contenidoEsperado = [
      {
        title: contenido,
        complete: false,
      },
    ];

    todos.add(contenido);

    const callback = (err) => {
      assert.toEqual(err, null); //Verifico que el error sea nulo cuando llamo a la callback.
      assert.strictEqual(fs.existsSync(todosFilePath), true); //Verifico que se haya creado el archivo correctamente
      let content = JSON.parse(fs.readFileSync(todosFilePath, 'utf-8'));

      assert.deepEqual(content, contenidoEsperado);
      done();
    };

    todos.saveToFileCb(callback);
  });
});

describe('comprobando que saveToFilePromises() funcione bien', () => {
  const todosFilePath = path.resolve(__dirname, '../../tareas.txt');
  let todos;

  before(() => {
    console.log('\n********* Comienzo TOTAL de Test *********');
  });

  after(function () {
    console.log('\n********* Fin TOTAL de Test *********');
  });

  beforeEach(() => {
    console.log('\n********* Comienzo Test *********');
    todos = new Tareas();
  });

  afterEach(() => {
    console.log('\n********* FIN Test *********');

    fs.unlinkSync(todosFilePath);
  });

  it('debería guardar una tarea en el archivo todos.txt (then/catch)', () => {
    const tareas = [
      'guardar tarea 1 Promises TC',
      'guardar tarea 2 Promises TC',
    ];

    todos.add(tareas[0]);
    todos.add(tareas[1]);
    const contenidoEsperado = tareas.map((aTodo) => ({
      title: aTodo,
      complete: false,
    }));

    return todos.saveToFilePromise().then(() => {
      assert.strictEqual(fs.existsSync(todosFilePath), true);

      let content = JSON.parse(fs.readFileSync(todosFilePath, 'utf-8'));
      assert.deepEqual(content, contenidoEsperado);
    });
  });

  it('debería guardar una tarea en el archivo todos.txt (async/await)', async () => {
    const tareas = [
      'guardar tarea 1 Promises TC',
      'guardar tarea 2 Promises TC',
    ];

    todos.add(tareas[0]);
    todos.add(tareas[1]);
    const contenidoEsperado = tareas.map((aTodo) => ({
      title: aTodo,
      complete: false,
    }));

    await todos.saveToFilePromise();

    assert.strictEqual(fs.existsSync(todosFilePath), true);
    let content = JSON.parse(fs.readFileSync(todosFilePath, 'utf-8'));
    assert.deepEqual(content, contenidoEsperado);
  });
});
