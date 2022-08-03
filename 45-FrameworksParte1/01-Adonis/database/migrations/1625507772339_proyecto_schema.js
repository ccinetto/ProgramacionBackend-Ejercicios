"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProyectoSchema extends Schema {
  up() {
    this.create("proyectos", (table) => {
      table.increments();
      table.integer("user_id").unsigned().references("id").inTable("users");
      table.string("nombre", 80).notNullable().unique();
      table.timestamps();
    });
  }

  down() {
    this.drop("proyectos");
  }
}

module.exports = ProyectoSchema;
