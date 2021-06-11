import React from 'react'
import Transactions from './Transactions.jsx';

const Blockchain = () => {

  return (
    <div id="page-2">
      <div name="blockchain" className="blockchain-page fullscreen">
      <p>So what are Blockchains anyway? Blockchains are databases filled with cryptographically secured information. For this example, we’re going to be taking a look into Bitcoin’s blockchain.</p>
      </div>
      <Transactions />
    </div>
  );
};

export default Blockchain;