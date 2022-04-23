const { options } = require('../options/mariaDB');
const knex = require('knex')(options);

knex('cars')
  .where('name', 'Ford')
  .update({
    price: 1111,
  })
  .then(() => {
    console.log(`Car Updated Lets query it`);

    return knex('cars').where('name', 'Ford');
  })
  .then((car) => {
    console.log(car);
  })
  .catch((err) => {
    console.log('There was an error updating car');
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
