const express = require('express');
const router = express.Router();
const News  = require('../models/newsModel');

// Get all news
router.get('/', async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single article by ID
router.get('/:id', async (req, res) => {
  try {
    const article = await News.findById(req.params.id);
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new news item
router.post('/', async (req, res) => {
  const newsItem = new News({
    title:       req.body.title,
    date:        req.body.date,
    description: req.body.description,
    cover:       req.body.cover,
  });

  try {
    const newNews = await newsItem.save();
    res.status(201).json(newNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a news item by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await News.findByIdAndUpdate(
      req.params.id,
      {
        title:       req.body.title,
        date:        req.body.date,
        description: req.body.description,
        cover:       req.body.cover,
      },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'News item not found' });
    res.json(updated);
  } catch (err) {
    console.error('Error updating news item:', err);
    res.status(400).json({ message: err.message });
  }
});

// Delete a news item by ID
router.delete('/:id', async (req, res) => {
  try {
    const newsItem = await News.findByIdAndDelete(req.params.id);
    if (!newsItem) return res.status(404).json({ message: 'News item not found' });
    res.json({ message: 'News item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;