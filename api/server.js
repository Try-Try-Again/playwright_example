const path = require('path');
const express = require('express');
const app = express();

// Middlewares...
// Routes...
app.get('/test', async (req, res) => {
    res.json({message: 'pass!'})
})

app.use(express.static(path.join(__dirname, '../client/public')));

module.exports = app;
