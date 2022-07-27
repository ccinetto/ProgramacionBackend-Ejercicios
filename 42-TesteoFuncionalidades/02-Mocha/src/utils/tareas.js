import fs, { NoParamCallback } from 'fs';
import path from 'path';
export class Tareas {
  tareas;

  constructor() {
    this.tareas = [];
  }

  list() {
    return this.tareas;
  }

  add(title) {
    let todo = {
      title: title,
      complete: false,
    };
    this.tareas.push(todo);
  }

  complete(title) {
    if (this.tareas.length === 0) {
      throw new Error('No hay tareas');
    }

    let todoFound = false;
    this.tareas.forEach((todo) => {
      if (todo.title === title) {
        todo.complete = true;
        todoFound = true;
        return;
      }
    });

    if (!todoFound) {
      throw new Error('Tarea no encontrada');
    }
  }

  saveToFileCb(cb) {
    fs.writeFile('tareas.json', JSON.stringify(this.tareas), cb);
  }

  saveToFilePromise() {
    return fs.promises.writeFile('tareas.txt', JSON.stringify(this.tareas));
  }
}