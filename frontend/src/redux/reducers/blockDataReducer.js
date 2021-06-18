const {
  FETCH_BLOCKS, FETCH_LATEST, FETCH_MINING, FETCH_TRA, FETCH_SINGLE_BLOCK,
} = require('../types');

const initialState = {
  blockchain: {},
  block: {},
  latestBlock: {},
  mining: {},
  transactions: {},
};

const blockDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOCKS: {
      return {
        ...state,
        blockchain: action.payload,
      };
    }
    case FETCH_SINGLE_BLOCK: {
      return {
        ...state,
        block: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default blockDataReducer;
