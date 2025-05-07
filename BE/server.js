require('dotenv').config({
  path: require('path').resolve(__dirname, '.env')
});


console.log('⏺ cwd:', process.cwd());
console.log('⏺ MONGO_URI:', process.env.MONGO_URI);

const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const app = express(); // Initialize app here

const gamesRouter = require('./api/GamesAPI');
const usersRouter = require('./api/UsersAPI');
const newsRouter = require('./api/NewsAPI');

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/games', gamesRouter);
app.use('/api/users', usersRouter);
app.use('/api/news', newsRouter);

app.get('/api/ping', (req, res) => res.json({ msg: 'pong' }));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);