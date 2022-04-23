exports.up = function (knex) {
  return knex.schema
    .createTable('categorias', (categoriasTable) => {
      categoriasTable.increments();
      categoriasTable.string('nombre').notNullable();
      categoriasTable.timestamp('createdAt').defaultTo(knex.fn.now());
    })
    .createTable('productos', (productosTable) => {
      productosTable.increments();
      productosTable.string('nombre').notNullable();
      productosTable.string('descripcion').notNullable();
      productosTable.integer('stock').notNullable();
      productosTable.decimal('precio', 4, 2);
      productosTable.timestamp('createdAt').defaultTo(knex.fn.now());
      productosTable
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('categorias');
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable('productos').dropTable('categorias');
};
