const axios = require('axios');

const getBlocks = (time, callback) => {
  axios.get(`https://blockchain.info/blocks/${time}?format=json`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSingleBlock = (hash, callback) => {
  console.log(hash)
  axios.get(`https://blockchain.info/rawblock/0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { getBlocks, getSingleBlock };