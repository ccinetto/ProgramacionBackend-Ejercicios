import Config from '../config';
import { User, UserModel } from '../models/user';
import jwt from 'jsonwebtoken';

export const generateAuthToken = (user) => {
  //get the private key from the config file -> environment variable
  const payload = {
    userId: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    admin: user.admin,
  };

  const token = jwt.sign(payload, Config.TOKEN_SECRET_KEY, {
    expiresIn: '1m',      //poner '1h' para 1 hora
  });
  return token;
};

export const checkAuth = async (req, res, next) => {
  //get the token from the header if present
  const token = req.headers['x-auth-token'];

  if (!token) return res.status(401).json({ msg: 'Unauthorized' });

  try {
    const decode = jwt.verify(
      token,
      Config.TOKEN_SECRET_KEY
    );
    console.log('TOKEN DECODIFICADO');
    console.log(decode);

    const user = await UserModel.findById(decode.userId);

    if (!user) return res.status(400).json({ msg: 'Unauthorized' });

    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ msg: 'Unauthorized' });
  }
};
