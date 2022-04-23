const { options } = require('../options/sqlite');
const knex = require('knex')(options);

knex.schema
  .createTable('cars', (table) => {
    table.increments('id');
    table.string('name');
    table.integer('price');
  })
  .then(() => console.log('Table created!'))
  .catch((err) => {
    console.log('There was an error creating table cars');
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
