const express = require('express');
const router = express.Router();
const Game = require('../models/gamesModel');

// Get all games
router.get('/', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single game by ID
router.get('/:id', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.json(game);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new game
router.post('/', async (req, res) => {
  const game = new Game({
    title: req.body.title,
    genre: req.body.genre,
    releaseDate: req.body.releaseDate,
  });

  try {
    const newGame = await game.save();
    res.status(201).json(newGame);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a game by ID
router.put('/:id', async (req, res) => {
  try {
    const{id} = req.params
    const updatedGame = await Game.findByIdAndUpdate(
      id,
      req.body,
      { new: true}
    );
    if (!updatedGame) return res.status(404).json({ message: 'Game not found' });
    res.json(updatedGame);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a game by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);
    if (!deletedGame) return res.status(404).json({ message: 'Game not found' });
    res.json({ message: 'Game deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;