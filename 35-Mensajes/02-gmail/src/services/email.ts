import Config from '../config';
import nodemailer from 'nodemailer';
import path from 'path';

class Email {
  private owner;
  private transporter;

  constructor() {
    this.owner = {
      name: Config.GMAIL_NAME,
      address: Config.GMAIL_EMAIL,
    };

    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: Config.GMAIL_EMAIL,
        pass: Config.GMAIL_PASSWORD,
      },
    });

    this.transporter.verify().then(() => console.log('READY To Send Email'));
  }

  async sendEmail(dest: string, subject: string, content: string) {
    const mailOptions = {
      from: this.owner,
      to: dest,
      subject,
      html: content,
      attachments: [
        {
          // filename and content type is derived from path
          path: path.resolve(__dirname, '../nodemailer.png'),
        },
      ],
    };

    const response = await this.transporter.sendMail(mailOptions);
    return response;
  }
}

export const EmailService = new Email();
