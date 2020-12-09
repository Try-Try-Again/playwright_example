const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.get('/test', async (req, res) => {
  res.json({message: 'pass!'});
});

app.use(express.static(path.join(__dirname, '../client/public')));

module.exports = app;

if (require.main === module) {
 app.listen(port);
}
