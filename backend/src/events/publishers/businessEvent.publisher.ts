import { getChannel } from "../rabbitmq";

const QUEUE_NAME = 'business.registered';

export async function publishBusinessRegistered(business: { email: string; name: string } ){
    const channel = getChannel();

    await channel.assertQueue(QUEUE_NAME, {durable: true});

    channel.sendToQueue(
        QUEUE_NAME,
        Buffer.from(
            JSON.stringify(business)
        )
    );
}