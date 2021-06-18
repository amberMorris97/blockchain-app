const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const { getBlocks, getSingleBlock } = require('./blockchainApi');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../../frontend/public')));

app.get('/getBlocks', (req, res) => {
  const time = new Date().getTime();
  getBlocks(time, (data) => {
    res.send(data);
  });
});

app.get('/getSingleBlock/:hash', (req, res) => {
  const { hash } = req.params;
  getSingleBlock(hash, (data) => {
    res.send(data);
  });
})

module.exports = app;