import React from 'react';
const axios = require('axios');

const fetchBlocks = () => {
  return  (dispatch) => {
    axios.get('/blockchain.info/blocks')
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
  };
};

export default fetchBlocks;