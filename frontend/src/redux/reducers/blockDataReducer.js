const { FETCH_BLOCKS, FETCH_LATEST, FETCH_MINING, FETCH_TRA } = require('../types');

const initialState = {
  blockchain: {},
  latestBlock: {},
  mining: {},
  transactions: {},
};

const blockDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOCKS: {
      return {
        ...state,
      }
    }
    case FETCH_TRA: {
      return {
        ...state,
        transactions: action.payload.transactions,
      };
    }
    default: {
      return state
    }
  }
};

export default blockDataReducer;