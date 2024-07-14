// routes/shopping.js
const express = require('express');
const { getSuggestions } = require('../ai_model'); // Import your AI model function

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { preferences } = req.body;
    const suggestions = await getSuggestions(preferences);
    res.json(suggestions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
