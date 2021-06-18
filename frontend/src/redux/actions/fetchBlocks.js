const axios = require('axios');
const { FETCH_BLOCKS, FETCH_SINGLE_BLOCK } = require('../types');

const fetchBlocks = () => (dispatch) => {
  axios.get('/getBlocks')
    .then((res) => {
      dispatch({ type: FETCH_BLOCKS, payload: res.data.slice(20) });
    })
    .catch((err) => {
      throw err;
    });
};

const fetchSingleBlock = (hash) => (dispatch) => {
  axios.get(`/getSingleBlock/${hash}`)
    .then((res) => {
      dispatch({ type: FETCH_SINGLE_BLOCK, payload: res.data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = { fetchBlocks, fetchSingleBlock };
