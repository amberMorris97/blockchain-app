import React, { useState, useEffect } from 'react';
import { Spline } from 'react-spline';
import NewBlock from './NewBlock.jsx';
import SPLINE_SCENE_FOUR from '../blockchainanime/scene4';

const Mining = () => {

  return (
    <div name="mining" id="page-4">
      <div className="mining-page fullscreen">
        <Spline scene={SPLINE_SCENE_FOUR} />
        <p>Bitcoin miners make up the blockchain network (P2P). They use expensive computer power to programatically verify every transaction in the pool so invalid hashes will automatically get rejected. <br /> <br />
        Miners gather up thousands of transactions, calculate a unique hash using the data and add a nonce to it in order to guess a target hash. If they are the first to guess closest to below or equal the hash, a new block is created, the gathered transactions are added to the block and the winner gets rewarded in BTC.<br /><br />
        This reward, along with block fees, are provided as incentivization for miners to continue verifying transactions because of how expensive the computer power required is.
        </p>
      </div>
      <NewBlock />
    </div>
  );
};

export default Mining;