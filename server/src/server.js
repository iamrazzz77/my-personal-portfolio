import app from './app.js';
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 5000;

// Start Express server immediately so port 5000 is open for Vite proxy requests
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Server] Express API running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  console.log(`[Server] Health Check: http://localhost:${PORT}/api/health`);
});

// Connect to MongoDB asynchronously
connectDB().catch(err => {
  console.error('[Database] Connection failed:', err.message);
});
