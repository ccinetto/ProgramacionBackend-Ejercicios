const { options } = require('../options/mariaDB');
const knex = require('knex')(options);

knex('cars')
  .select('name', 'price')
  .where('id', '>', '3')
  .then((cars) => {
    console.log(`Found ${cars.length} cars`);
    console.log(`NAME  | PRICE`);

    cars.forEach((aCar) => console.log(`${aCar.name}  | ${aCar.price}`));
  })
  .catch((err) => {
    console.log('There was an error inserting table cars');
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
