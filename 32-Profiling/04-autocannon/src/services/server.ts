import express from 'express';
import crypto from 'crypto';

const app = express();

interface Users {
  username: string;
  salt: string;
  hash: Buffer;
}

const users: Users[] = [];

app.get('/getUsers', (req, res) => {
  res.json({ users });
});

app.get('/newUser', (req, res) => {
  if (!req.query.username || !req.query.password)
    return res.status(400).json({ msg: 'Invalid query params' });

  let username = String(req.query.username);
  const password = String(req.query.password);

  username = username.replace(/[!@#$%^&*]/g, '');

  if (users.find((aUser) => aUser.username == username))
    return res.status(400).json({ msg: 'User already exists' });

  const salt = crypto.randomBytes(128).toString('base64');
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');

  users.push({
    username,
    hash,
    salt,
  });

  res.sendStatus(200);
});

app.get('/auth-bloq', (req, res) => {
  if (!req.query.username || !req.query.password)
    return res.status(400).json({ msg: 'Invalid query params' });

  let username = String(req.query.username);
  const password = String(req.query.password);

  username = username.replace(/[!@#$%^&*]/g, '');

  const user = users.find((aUser) => aUser.username == username);

  if (!user) return res.status(404).json({ msg: 'User not found' });

  const { salt, hash } = user;
  const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');

  if (crypto.timingSafeEqual(hash, encryptHash)) {
    res.sendStatus(200);
  } else {
    console.log('error crypto');
    res.sendStatus(401);
  }
});

app.get('/auth-nobloq', (req, res) => {
  if (!req.query.username || !req.query.password)
    return res.status(400).json({ msg: 'Invalid query params' });

  let username = String(req.query.username);
  const password = String(req.query.password);

  username = username.replace(/[!@#$%^&*]/g, '');

  const user = users.find((aUser) => aUser.username == username);
  if (!user) return res.status(404).json({ msg: 'User not found' });

  const { salt, hash } = user;

  crypto.pbkdf2(password, salt, 10000, 512, 'sha512', (err, hash) => {
    if (hash.toString() === hash.toString()) {
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  });
});

export default app;
