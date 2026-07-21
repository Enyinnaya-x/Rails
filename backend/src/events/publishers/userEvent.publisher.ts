import { getChannel } from '../rabbitmq.js';

const QUEUE_NAME = 'user.registered';

export async function publishUserRegistered(user: { email: string; full_name: string }) {
  const channel = getChannel();

  await channel.assertQueue(QUEUE_NAME, { durable: true });

  channel.sendToQueue(
    QUEUE_NAME,
    Buffer.from(JSON.stringify(user))
  );
}