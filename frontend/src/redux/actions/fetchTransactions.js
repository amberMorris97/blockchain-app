const axios = require('axios');
const { FETCH_TRANSACTIONS } = require('../types');

const fetchTransactions = () => (dispatch) => {
  axios.get('/fetchTransactions')
    .then((res) => {
      dispatch({
        type: FETCH_TRANSACTIONS,
        payload: res.data,
      });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = fetchTransactions;
