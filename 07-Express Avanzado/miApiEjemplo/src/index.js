const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const app = express();

const filePath = path.resolve(__dirname, '../usuarios.json');
console.log(filePath);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/usuarios', async (req, res) => {
	const fileData = await fs.readFile(filePath, 'utf-8');
	const usuarios = JSON.parse(fileData);
	res.json({
		data: usuarios,
	});
});

app.get('/usuarios/:id', async (req, res) => {
	const id = req.params.id
	const fileData = await fs.readFile(filePath, 'utf-8');
	const usuarios = JSON.parse(fileData);

	const indice = usuarios.findIndex(unUsuario => unUsuario.id == id);

	if(indice < 0){
		return res.status(404).json({
			msg: "el usuario no existe"
		})
	}

	res.json({
		msg: `devolviendo el usuario con id ${id}`,
		data: usuarios[indice]
	});
});


app.post('/usuarios', async (req, res) => {
	const data = req.body;
	console.log(req.body);

	const { nombre, edad, goles } = req.body;

	if(!nombre || !edad || !goles) {
		return res.status(400).json({
			msg: "Campos invalidos :( "
		})
	}

	const nuevoUsuario = {
		nombre,
		edad,
		goles
	}

	const fileData = await fs.readFile(filePath, 'utf-8');
	const usuarios = JSON.parse(fileData);
	usuarios.push(nuevoUsuario);

	await fs.writeFile(filePath, JSON.stringify(usuarios, null, '\t'));

	res.json({
		msg: 'ok',
		data: nuevoUsuario
	})
});

app.put('/usuarios/:id', async (req, res) => {
	const id = req.params.id;
	const {nombre, edad, goles} = req.body;

	const fileData = await fs.readFile(filePath, 'utf-8');
	const usuarios = JSON.parse(fileData);

	const indice = usuarios.findIndex(unUsuario => unUsuario.id == id);

	if(indice < 0){
		return res.status(404).json({
			msg: "el usuario no existe"
		})
	}

	if(!nombre || !edad || !goles) {
		return res.status(400).json({
			msg: "Campos invalidos :( "
		})
	}

	const usuarioActualizado = {
		id: usuarios[indice].id,
		nombre,
		edad,
		goles
	}

	usuarios.splice(indice, 1, usuarioActualizado);

	await fs.writeFile(filePath, JSON.stringify(usuarios, null, '\t'));

	//actualizar
	res.json({
		msg: `Modificando objet con id ${id}`,
		data: usuarioActualizado,
	})
});

app.delete('/usuarios/:id', async (req, res) => {
	const id = req.params.id;
	const fileData = await fs.readFile(filePath, 'utf-8');
	const usuarios = JSON.parse(fileData);

	const indice = usuarios.findIndex(unUsuario => unUsuario.id == id);

	if(indice < 0){
		return res.json({
			msg: "ok"
		})
	}

	usuarios.splice(indice, 1);
	await fs.writeFile(filePath, JSON.stringify(usuarios, null, '\t'));

	//borrar
	res.json({
		msg: `Borrando objet con id ${id}`,
	})
})


const puerto = 8080;

app.listen(puerto, () => {
	console.log(`Servidor Listo escuchando en el puerto ${puerto}`)
})