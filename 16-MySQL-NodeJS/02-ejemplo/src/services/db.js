import knex from 'knex';
import dbConfig from '../../knexfile';

class DB {
  constructor() {
    const environment = process.env.NODE_ENV || 'development';
    console.log(`SETTING ${environment} DB`);
    const options = dbConfig[environment];
    this.connection = knex(options);
  }

  init() {
    this.connection.schema.hasTable('categorias').then((exists) => {
      if (exists) return;
      console.log('Creamos la tabla categorias!');

      return this.connection.schema.createTable(
        'categorias',
        async (categoriasTable) => {
          categoriasTable.increments();
          categoriasTable.string('nombre').notNullable();
          categoriasTable.timestamps(true, true);

          const initCategories = [
            { nombre: 'computadoras' },
            { nombre: 'articulos libreria' },
            { nombre: 'camisetas' },
          ];

          const createCategories = initCategories.map((aCategory) =>
            this.create('categorias', aCategory)
          );
          await Promise.all(createCategories);
        }
      );
    });

    this.connection.schema.hasTable('productos').then((exists) => {
      if (exists) return;
      console.log('Creamos la tabla productos!');

      return this.connection.schema.createTable(
        'productos',
        async (productosTable) => {
          productosTable.increments();
          productosTable.string('nombre').notNullable();
          productosTable.string('descripcion').notNullable();
          productosTable.integer('stock').notNullable();
          productosTable.decimal('precio', 4, 2);
          productosTable.timestamps(true, true);
          productosTable
            .integer('category_id')
            .unsigned()
            .references('id')
            .inTable('categorias');

          const initProducts = [
            {
              nombre: 'cartuchera',
              descripcion: 'Linda Cartuchera',
              stock: 20,
              precio: '10.5',
              category_id: 2,
            },
            {
              nombre: 'pendrive',
              descripcion: 'pendrive 32gb',
              stock: 20,
              precio: '99.4',
              category_id: 1,
            },
          ];

          const createProducts = initProducts.map((aCategory) =>
            this.create('productos', aCategory)
          );
          await Promise.all(createProducts);
        }
      );
    });
  }

  get(tableName, id) {
    if (id) return this.connection(tableName).where('id', id);

    return this.connection(tableName);
  }

  create(tableName, data) {
    return this.connection(tableName).insert(data);
  }

  update(tableName, id, data) {
    return this.connection(tableName).where('id', id).update(data);
  }

  delete(tableName, id) {
    return this.connection(tableName).where('id', id).del();
  }
}

export const DBService = new DB();
