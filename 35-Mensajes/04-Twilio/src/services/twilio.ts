import Config from '../config';
import twilio from 'twilio';

class Twilio {
  private twilio;

  constructor() {
    this.twilio = twilio(Config.TWILIO_ACCOUNT_ID, Config.TWILIO_TOKEN);
  }

  async sendMessage(cellphoneNumber: string, message: string) {
    const params = {
      body: message,
      from: Config.TWILIO_CELLPHONE,
      to: cellphoneNumber,
    };

    const response = await this.twilio.messages.create(params);
    return response;
  }
}

export const SmsService = new Twilio();
