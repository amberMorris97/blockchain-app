const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../../frontend/public')));

app.get('/blockchain.info/blocks', (req, res) => {
  const time = new Date().getTime();
  console.log(time)
  res.send(`${time}`)
});

module.exports = app;