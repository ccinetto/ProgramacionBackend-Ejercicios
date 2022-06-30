import { Router } from 'express';
import { EmailService } from '../services/email';
import Config from '../config';
const router = Router();

router.get('/', (req, res) => {
  console.log('Resolving / endpoint');
  res.json({
    pid: process.pid,
    msg: `HOLA`,
  });
});

router.post('/send-email', async (req, res) => {
  const destination = Config.ETHEREAL_EMAIL;
  const subject = 'Hola Juan Carlos2!';
  const content = `
  <h1>HOLAAAA</h1>
  <p> Te queriamos dar la bienvenida a este mundo de nodemailer</p>
  `;

  try {
    const response = await EmailService.sendEmail(
      destination,
      subject,
      content,
    );

    res.json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
