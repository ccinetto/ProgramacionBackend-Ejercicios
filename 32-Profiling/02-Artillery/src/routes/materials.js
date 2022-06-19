import { Router } from 'express';
import { MaterialModel } from '../models/materials';

const app = Router();

app.get('/', async (req, res) => {
  const filters = {};

  if (req.query.id) {
    filters._id = String(req.query.id);
  }
  if (req.query.name) filters.name = String(req.query.name);

  const materials = await MaterialModel.find(filters);
  res.json(materials);
});

app.post('/', async (req, res) => {
  const body = req.body;

  if (!body.name) return res.status(400).json({ msg: 'inavlid body' });

  const newMaterial = new MaterialModel({
    name: body.name,
    stock: body.stock ? body.stock : 1,
  });

  await newMaterial.save();

  res.json({
    msg: 'material addedd',
    newMaterial,
  });
});

export default app;
