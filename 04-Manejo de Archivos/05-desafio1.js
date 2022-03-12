const fs = require('fs');

try {
  const fecha = Date();

  fs.writeFileSync('fyh.txt', fecha);

  const data = fs.readFileSync('fyh.txt', 'utf-8');

  console.log(data);
} catch (err) {
  console.log('ERROR', err);
}
