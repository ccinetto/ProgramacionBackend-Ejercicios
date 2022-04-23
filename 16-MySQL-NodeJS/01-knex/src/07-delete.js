const { options } = require('../options/mariaDB');
const knex = require('knex')(options);

knex('cars')
  .del()
  .where('name', 'Ford')
  .then(() => {
    console.log(`Car Deleted. Lets query all cars`);

    return knex('cars');
  })
  .then((cars) => {
    console.log(`Found ${cars.length} cars`);
    console.log(`ID | NAME  | PRICE`);

    cars.forEach((aCar) =>
      console.log(`${aCar.id} | ${aCar.name}  | ${aCar.price}`)
    );
  })
  .catch((err) => {
    console.log('There was an error updating car');
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
