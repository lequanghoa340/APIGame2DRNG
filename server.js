const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();

// Kết nối tới MongoDB
connectDB();

// Middleware
app.use(express.json()); // Phân tích body JSON

// Routes
app.use('/api/auth', authRoutes);

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
