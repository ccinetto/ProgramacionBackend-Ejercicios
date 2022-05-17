import fs from 'fs';
import * as util from 'util';
import express from 'express';

const app = express();
//----------------------------------------------------------------------------------------------------
//conseguir todos los articulos de un id en especial

app.get('/original', (req, res) => {
	const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
	res.json({
		data
	})
});


app.get('/articulos-por-autor', (req, res) => {
	const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

	// Id de ejemplo '6145f15975a527f507148a95';
	let response;
	const { authorId } = req.query

	response = data.filter((article) => article.author._id === authorId);
	
	console.log(`Los articulos del author con id ${authorId} son los siguientes: `);
	console.log(util.inspect(response, true, 88, true));
	// console.log(response);

	res.json({
		articles: response
	})
})
//----------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------
//Conseguir todos los comentarios de un usuario en particular
app.get('/comentarios-de-usuario', (req, res) => {
	// Ejemplo de userId  '6145f159b90a59691484f99d';
	const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
	const { userId } = req.query;
	const userComments = [];
	
	data.forEach((article) => {
		article.comments.forEach((comment) => {
			if (comment.commenter._id === userId) {
				userComments.push(comment);
			}
		});
	});
	
	console.log(`Los comentarios del user con id ${userId} son los siguientes: `);
	console.log(userComments);
	res.json({
		userComments
	})
})
//----------------------------------------------------------------------------------------------------

// //----------------------------------------------------------------------------------------------------
// //Conseguir el usuario con mas posteos

app.get('/comentarios-por-usuario', (req, res) => {
	const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
	let commentsPerUser = {};

	data.forEach((article) => {
		article.comments.forEach((comment) => {
			if (commentsPerUser[comment.commenter._id]) {
				commentsPerUser[comment.commenter._id].count++;
			} else {
				commentsPerUser[comment.commenter._id] = {
					count : 1,
					...comment.commenter,
				};
			}
		});
	});

	return res.json({
		commentsPerUser,
		keys: Object.keys(commentsPerUser),
	})
})

app.get('/usuario-max-comentarios', (req, res) => {
	const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
	let commentsPerUser = {};

	data.forEach((article) => {
		article.comments.forEach((comment) => {
			if (commentsPerUser[comment.commenter._id]) {
				commentsPerUser[comment.commenter._id].count++;
			} else {
				commentsPerUser[comment.commenter._id] = {
					count : 1,
					...comment.commenter,
				};
			}
		});
	});
	
	let userWithMostComments = {};
	Object.keys(commentsPerUser).forEach((userId) => {
		if (commentsPerUser[userId].count > (userWithMostComments.count || -1)) {
			userWithMostComments = {
				...commentsPerUser[userId],
			};
		}
	});
	
	console.log(`El usuario con mas comentarios es`);
	console.log(userWithMostComments);

	res.json({
		userWithMostComments
	})
})

// //----------------------------------------------------------------------------------------------------


app.listen(8080, () =>  console.log("Ready"))