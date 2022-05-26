import { Router } from 'express';
import { UserModel } from '../models/user';
import { generateAuthToken, checkAuth } from '../services/auth';

const router = Router();

router.post('/login', async (req, res) => {
  let { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (!user || !user.isValidPassword(password))
    return res.status(401).json({ msg: 'Invalid Username/Password' });

  const token = generateAuthToken(user);

  res.header('x-auth-token', token).json({
    msg: 'login OK',
    token,
  });
});

router.post('/signup', async (req, res) => {
  const { username, password, email, firstName, lastName, admin } = req.body;
  console.log(req.body);
  if (!username || !password || !email || !firstName || !lastName)
    return res.status(400).json({ msg: 'Invalid body fields' });

  const query = {
    $or: [{ username: username }, { email: email }],
  };

  console.log(query);
  const user = await UserModel.findOne(query);

  if (user) return res.status(400).json({ msg: 'User already exists' });

  const userData = {
    username,
    password,
    email,
    firstName,
    lastName,
    admin,
  };

  const newUser = await UserModel.create(userData);
  const token = generateAuthToken(newUser);

  res.header('x-auth-token', token).json({
    msg: 'signup OK',
  });
});

router.get('/secure-data', checkAuth, (req, res) => {
  res.json({ msg: 'Llegaste a la data segura' });
});
export default router;
