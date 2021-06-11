import React, { useState } from 'react'
import { Spline } from 'react-spline'
import SPLINE_SCENE_TWO from '../blockchainanime/scene2';
import Transactions from './Transactions.jsx';
import Modal from '../Modals/Modal.jsx';

const Blockchain = () => {
  const [open, setOpen] = useState(false);
  return (
    <div id="page-2">
      <div name="blockchain" className="blockchain-page fullscreen">
      <span onClick={() => setOpen(true)}>
        <Spline scene={SPLINE_SCENE_TWO} />
      </span>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h1>hi</h1>
      </Modal>
      <p>So what are Blockchains anyway? Blockchains are databases filled with cryptographically secured information. For this example, we’re going to be taking a look into Bitcoin’s blockchain. <br /> <br />
      "Blocks" on the chain are responsible for holding transaction data. Each block has its own unique hash id and the hash of the block before it, this is how they're "chained" together. <br /> <br />
      Blockchains are extremely secure because of this chaining behavior. A blocks hash id is unique to its data + a nonce (number used once). If someone were to change any amount of data that lives on a block, the blocks hash would change and the blockchain network wouldn't accept it.</p>
      </div>
      <Transactions />
    </div>
  );
};

export default Blockchain;