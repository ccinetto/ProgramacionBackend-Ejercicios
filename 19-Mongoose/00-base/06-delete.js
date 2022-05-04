const { initMongoDB, disconnectMongo } = require('./01-conexion');
const { UsuarioModel } = require('./02-schema');

const borrar = async () => {
  await initMongoDB();

  console.log('Delete documento por ID');
  const idDocumento = '6272792400f9e7da25e8dcac';
  const u1 = await UsuarioModel.findByIdAndDelete(idDocumento);

  console.log('Deleted Document');
  console.log(u1);

  console.log('Delete documento con filtros');
  const u2 = await UsuarioModel.deleteOne({ admin: true });

  console.log('\n\n\n\nDeleted con filtros');
  console.log(u2);
  await disconnectMongo();
};

borrar();
