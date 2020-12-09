const express = require('express');
const app = express();

// Middlewares...
// Routes...
app.get('/test', async (req, res) => {
    res.json({message: 'pass!'})
})

module.exports = app;
