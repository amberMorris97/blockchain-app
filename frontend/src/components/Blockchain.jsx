/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Spline } from 'react-spline';
import SPLINE_SCENE_TWO from '../blockchainanime/scene2';
import Transactions from './Transactions.jsx';
import Modal from '../Modals/Modal.jsx';

const moment = require('moment');

const Blockchain = () => {
  const block = useSelector((state) => state.blockDataReducer.block);
  const [open, setOpen] = useState(false);

  return (
    <div id="page-2">
      <div name="blockchain" className="blockchain-page fullscreen">
        <span onClick={() => setOpen(true)}>
          <Spline scene={SPLINE_SCENE_TWO} />
        </span>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="bcModalContent">
            <h3>
              Data for block:
              {' '}
              {block.block_index}
            </h3>
            <span>
              <h6>
                Hash:
              </h6>
              {block.hash}
            </span>
            <br />
            <span>
              <h6>
                Previous Block:
              </h6>
              {block.prev_block}
            </span>
            <br />
            <span>
              <h6>
                Next Block:
              </h6>
              {block.next_block}
            </span>
            <br />
            <span>
              <h6>
                This Block Was Added On:
              </h6>
              {moment(block.time).format('MMMM Do YYYY, h:mm:ss a')}
            </span>
          </div>
        </Modal>
        <p>
          So what are Blockchains anyway? Blockchains are databases filled with cryptographically secured information. For this example, we’re going to be taking a look into Bitcoin’s blockchain.
          <br />
          {' '}
          <br />
          Blocks on the chain are responsible for holding transaction data. Each block has its own unique hash id, the hash of the block before it and eventually the hash of the block after it. This is how they are chained together.
          {' '}
          <br />
          {' '}
          <br />
          Blockchains are extremely secure because of this chaining behavior. A blocks hash id is unique to its data + a nonce (number used once). If someone were to change any amount of data that lives on a block, the blocks hash would change and the blockchain network would not accept it.
        </p>
      </div>
      <Transactions />
    </div>
  );
};

export default Blockchain;
