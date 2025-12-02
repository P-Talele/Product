import { createApp } from './app';
import { connectDB } from './database/Db';
import { config } from './config/index';

async function start() {
    try {
        await connectDB();
        const app = createApp();

        const port = Number(config.port) || 8000;

        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Failed to start server', err);
        process.exit(1);
    }
}

start();
