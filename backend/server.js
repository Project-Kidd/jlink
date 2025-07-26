const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const pingRoutes = require('./routes/pingRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 5000;

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // For reading req.body

// Routes
app.use('/api', pingRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
