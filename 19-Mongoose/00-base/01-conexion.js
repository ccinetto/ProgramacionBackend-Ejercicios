const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/ccinetto';

const initMongoDB = async () => {
  try {
    console.log('CONECTANDO A MI DB');
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('YA ESTOY CONECTADO');
  } catch (error) {
    console.log(`ERROR => ${error}`);
    return error;
  }
};

const disconnectMongo = async() => {
	try {
    console.log('DESCONECTANDO DE MI DB');
    await mongoose.disconnect()

    console.log('DESCONEXION OK');
  } catch (error) {
    console.log(`ERROR => ${error}`);
    return error;
  }
}

module.exports = { initMongoDB, disconnectMongo }