import amqp from 'amqplib';
import { env } from '../config/env';

let connection: Awaited<ReturnType<typeof amqp.connect>>;
let channel: Awaited<ReturnType<typeof connection.createChannel>>;

export async function connectRabbitMQ(): Promise<void> {
  connection = await amqp.connect(env.RABBITMQ_URL);
  channel = await connection.createChannel();

  console.log('✓ RabbitMQ connected');

  connection.on('error', (err: Error) => {
    console.error('RabbitMQ connection error', err);
  });
}

export function getChannel() {
  if (!channel) {
    throw new Error('RabbitMQ channel not initialized — call connectRabbitMQ() first');
  }
  return channel;
}