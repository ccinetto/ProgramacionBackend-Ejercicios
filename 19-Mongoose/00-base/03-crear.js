const { initMongoDB, disconnectMongo } = require('./01-conexion');
const { UsuarioModel } = require('./02-schema');

/**
 * Crear un Documento
 */
 const crearUsuario = async (newUsuario) => {
	console.log(`Vamos a crear a ${newUsuario.nombre}`)
	await UsuarioModel.create(newUsuario)
	console.log("DONE\n\n");
}



const main = async () => {
	await initMongoDB();

	/**Creamos 1 usuario */
	const newUsuario = {
		nombre: 'Juan', 
		apellido: 'Perez',
		email: 'juanperez@gmail.com',
		admin: true,
		usuario: 'jperez2000',
		password: "SuperPassword",
		edad: 28
	}
	await crearUsuario(newUsuario);

	/**Creamos varios usuarios */

	const usuarios = [
		{
			nombre: 'Carlos', 
			apellido: 'Tevez',
			email: 'carlostevez@gmail.com',
			admin: false,
			usuario: 'carlostevez',
			password: "SuperPassword",
			edad: 35
		},
		{
			nombre: 'Martin', 
			apellido: 'Palermo',
			email: 'martinpalermo@gmail.com',
			admin: false,
			usuario: 'mpalermo',
			password: "SuperPassword",
			edad: 38
		},
		{
			nombre: 'Oscar', 
			apellido: 'Cordoba',
			email: 'oscarcordoba@gmail.com',
			admin: true,
			usuario: 'ocordoba',
			password: "SuperPassword",
			edad: 31
		},
	]

	const creaciones = usuarios.map(a => crearUsuario(a))
	await Promise.all(creaciones);
	await disconnectMongo();
}


main();