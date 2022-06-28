import { Router } from 'express';
import { SmsService } from '../services/twilio';
const router = Router();

router.get('/', (req, res) => {
  console.log('Resolving / endpoint');
  res.json({
    pid: process.pid,
    msg: `HOLA`,
  });
});

router.post('/send-message', async (req, res) => {
  const { body } = req;

  if (!body || !body.destination || !body.content)
    return res.status(400).json({
      msg: "mandame en el body el 'destination' y el 'content'",
      body,
    });

  try {
    const response = await SmsService.sendMessage(
      body.destination,
      body.content
    );

    res.json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
