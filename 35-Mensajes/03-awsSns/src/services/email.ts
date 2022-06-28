import Config from '../config';
import AWS from 'aws-sdk';

class Email {
  private sns;
  private arn;

  constructor() {
    AWS.config.update({
      accessKeyId: Config.AWS_ACCESS_KEY_ID,
      secretAccessKey: Config.AWS_SECRET_ACCESS_KEY,
      region: Config.AWS_REGION,
    });

    this.sns = new AWS.SNS();
    this.arn = Config.SNS_TOPIC_ARN;
  }

  async sendEmail(message: string) {
    const params = {
      Message: message,
      TopicArn: this.arn,
    };

    const response = await this.sns.publish(params).promise();
    return response;
  }

  async addEmail(email: string) {
    const params = {
      TopicArn: this.arn,
      Protocol: 'email',
      Endpoint: email,
    };

    const response = await this.sns.subscribe(params).promise();
  }
}

export const EmailService = new Email();
