import { getChannel } from '../rabbitmq';
import { sendBusinessWelcomeEmail, sendWelcomeEmail } from '../../services/email.service';

export async function startEmailConsumer() {
  const channel = getChannel();

  await channel.assertQueue('user.registered', { durable: true });
  await channel.assertQueue('business.registered', { durable: true });

  channel.consume('user.registered', async (msg) => {
    if (!msg) return;
    try {
      const user = JSON.parse(msg.content.toString());
      await sendWelcomeEmail(user);
      channel.ack(msg);
    } catch (err) {
      console.error('Failed to process user.registered', err);
      channel.nack(msg, false, false);
    }
  });

  channel.consume('business.registered', async (msg) => {
    if (!msg) return;
    try {
      const business = JSON.parse(msg.content.toString());
      await sendBusinessWelcomeEmail(business);
      channel.ack(msg);
    } catch (err) {
      console.error('Failed to process business.registered', err);
      channel.nack(msg, false, false);
    }
  });

  console.log('✓ Listening for registration events');
}