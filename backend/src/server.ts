import app from './app.js';
import { env } from './config/env';
import { connectRabbitMQ } from './events/rabbitmq.js';
import { startEmailConsumer } from './events/consumers/email.consumer.js';

const PORT = env.PORT || 3000;


app.listen(PORT, ()=>{
    console.log(`Port is running on ${PORT}`);
})

await connectRabbitMQ();
await startEmailConsumer();