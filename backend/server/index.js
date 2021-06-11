const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../../frontend/public')));

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});

module.exports = app;