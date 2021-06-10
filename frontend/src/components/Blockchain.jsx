import React from 'react'
import { Spline } from 'react-spline'
import SPLINE_SCENE from '../blockchainanime/scene';
import Transactions from './Transactions.jsx';

const Blockchain = () => {

  return (
    <div id="page-2">
      <div className="blockchain-page fullscreen">
      <h1>Blockchain</h1>
      <Spline scene={SPLINE_SCENE} />
      </div>
      <Transactions />
    </div>
  );
};

export default Blockchain;