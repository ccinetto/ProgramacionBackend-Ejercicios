import { Router } from 'express';
import { UserModel } from '../models/user';

const router = Router();

router.get('/', async (req, res) => {
  const data = await UserModel.find();
  res.json({ data });
});

router.post('/', async (req, res) => {
  const { username, password, email, firstName, lastName } = req.body;

  if (!username || !password || !email || !firstName || !lastName) {
    console.log('Invalid body fields');
    return res.status(400).json({ msg: 'Invalid fields' });
  }

  const userData = {
    username,
    password,
    email,
    firstName,
    lastName,
  };

  const newUser = new UserModel(userData);

  await newUser.save();

  res.json({ data: newUser });
});

export default router;
