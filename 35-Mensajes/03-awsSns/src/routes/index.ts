import { Router } from 'express';
import { EmailService } from '../services/email';
const router = Router();

router.get('/', (req, res) => {
  console.log('Resolving / endpoint');
  res.json({
    pid: process.pid,
    msg: `HOLA`,
  });
});

router.post('/subscribe', async (req, res) => {
  const { body } = req;

  if (!body || !body.email)
    return res.status(400).json({
      msg: "mandame en el mail donde queres recibir las notificaciones'",
      body,
    });

  try {
    const response = await EmailService.addEmail(body.email);
    res.json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/send-email', async (req, res) => {
  const { body } = req;

  if (!body || !body.content)
    return res.status(400).json({
      msg: "mandame en el body el 'content'",
      body,
    });

  const content = body.content;

  try {
    const response = await EmailService.sendEmail(content);

    res.json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
