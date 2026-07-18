import app from './app.js';
import { env } from './config/env';

const PORT = env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Port is running on ${PORT}`);
})