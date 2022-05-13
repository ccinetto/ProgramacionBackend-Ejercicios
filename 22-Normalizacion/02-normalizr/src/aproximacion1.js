import fs from 'fs';
import path from 'path';
import { normalize, schema } from 'normalizr';
const inputPath = path.resolve(__dirname, '../data/input.json');

export const original = async (req, res) => {
  const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
  res.json({
    original: data
  })
}


export const intento1 = async (req, res) => {

  const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

  const user = new schema.Entity('users');

  const comment = new schema.Entity('comments', {
    commenter: user,
  });

  const article = new schema.Entity('articles', {
    comments: [comment],
    author: user,
  });

  const normalizedData = normalize(data, [article]);

	res.json({
    normalizedData
  })
};


export const intento2 = async (req, res) => {

  const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

  const user = new schema.Entity('users', {}, {
    idAttribute: '_id'
  });

  const comment = new schema.Entity('comments', {
    commenter: user,
  });

  const article = new schema.Entity('articles', {
    comments: [comment],
    author: user,
  });

  const normalizedData = normalize(data, [article]);

	res.json({
    normalizedData
  })
};