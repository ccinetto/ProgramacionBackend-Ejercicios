const { options } = require('../options/mariaDB');
const knex = require('knex')(options);

const cars = [
  { name: 'Audi', price: 52367 },
  { name: 'Mercedes', price: 1234 },
  { name: 'Peugeot', price: 2345 },
  { name: 'Ford', price: 3456 },
  { name: 'Chevrolet', price: 456 },
  { name: 'Susuzi', price: 237 },
  { name: 'Hummer', price: 9876 },
];

knex('cars')
  .insert(cars)
  .then(() => console.log('Data inserted!'))
  .catch((err) => {
    console.log('There was an error inserting table cars');
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
