import Logger from '../services/logger';
import { UserAPI, CartAPI } from '../api';

export const validateNewUser = (newUser) => {
  return (
    !newUser ||
    !newUser.firstName ||
    !newUser.lastName ||
    !newUser.age ||
    !newUser.address ||
    !newUser.address.street ||
    !newUser.address.city
  );
};

export const getUserByEmail = (email) => UserAPI.findByEmail(email);

export const createUser = async (userData) => {
  const newUser = await UserAPI.create(userData);
  await CartAPI.create(newUser.id);
  return newUser;
};

export const isLoggedIn = (req, res, done) => {
  Logger.info('Is Authenticated');
  Logger.info(req.isAuthenticated());
  if (!req.isAuthenticated())
    return res.status(401).json({ msg: 'Unathorized' });

  done();
};

export const isAdmin = (req, res, done) => {
  Logger.info('Is Admin Middleware');
  Logger.info(req.user);

  if (!req.user.admin)
    return res.status(401).json({ msg: 'Unathorized - Admin Only' });

  done();
};
