const { initMongoDB, disconnectMongo } = require('./01-conexion');
const { UsuarioModel } = require('./02-schema');

const consultar = async () => {
  await initMongoDB();

  const q1 = await UsuarioModel.find();

  console.log('\n\n\nUsuarios con find');
  console.log(q1);

  const q2 = await UsuarioModel.find({ edad: { $gt: 33 } });
  console.log('\n\n\nUsuarios con find filtro edad mayor a 33');
  console.log(q2);

  const c1 = { edad: { $gt: 35 } };
  const c2 = { admin: false };

  const q3 = await UsuarioModel.find({
    $and: [c1, c2],
  });

  console.log(
    '\n\n\nUsuarios con find filtro edad mayor a 35 y que no sean admins'
  );
  console.log(q3);

  const q4 = await UsuarioModel.find({ admin: true }).sort({ edad: 1 });
  console.log('\n\n\nUsuarios con find + sort');
  console.log(q4);

  const q5 = await UsuarioModel.find({ admin: true })
    .sort({ edad: 1 })
    .limit(2);
  console.log('\n\n\nUsuarios con find + sort + limit');
  console.log(q5);

  const q6 = await UsuarioModel.find({ admin: true }, { nombre: 1, email: 1 })
    .sort({ edad: 1 })
    .limit(2);
  console.log('\n\n\nUsuarios con find + proyeccion + sort + limit');
  console.log(q6);

  await disconnectMongo();
};

consultar();
