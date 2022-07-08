import Config from '../config';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

const twilioAPI = twilio(Config.TWILIO_ACCOUNT_ID, Config.TWILIO_TOKEN);

const owner = {
  name: Config.GMAIL_NAME,
  address: Config.GMAIL_EMAIL,
};

const gmailTransporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: Config.GMAIL_EMAIL,
    pass: Config.GMAIL_PASSWORD,
  },
});

const notifyNewUserByEmail = async (userData) => {
  const mailOptions = {
    from: owner,
    to: Config.GMAIL_EMAIL,
    subject: 'New User Created',
    html: `A New User was created. See info below\n\n\n ${userData}`,
  };
  const response = await gmailTransporter.sendMail(mailOptions);
  return response;
};

const notifyNewOrderUsingWhatsApp = async (orderData) => {
  const params = {
    body: `A New Order was created. See info below\n\n\n ${orderData}`,
    from: `whatsapp:${Config.TWILIO_WSP_CELLPHONE}`,
    to: `whatsapp:${Config.ADMIN_PHONE}`,
  };

  const response = await twilioAPI.messages.create(params);
  return response;
};

export const NotificationService = {
  notifyNewUserByEmail,
  notifyNewOrderUsingWhatsApp,
};
