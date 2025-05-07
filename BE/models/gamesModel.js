const mongoose = require('mongoose');

const GamesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  releaseDate: { type: Date, required: true },
});

module.exports = mongoose.model('games', GamesSchema);


