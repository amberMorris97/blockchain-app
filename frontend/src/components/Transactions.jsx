import React, { useState, useEffect } from 'react';
import { Spline } from 'react-spline'
import SPLINE_SCENE_THREE from '../blockchainanime/scene3';
import Mining from './Mining.jsx';
import Modal from '../Modals/Modal.jsx';

const Transactions = () => {
  const [open, setOpen] = useState(false);

  return (
    <div name="transactions" id="page-3">
      <div className="transactions fullscreen">
      <span onClick={() => setOpen(true)}>
        <Spline scene={SPLINE_SCENE_THREE} />
      </span>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h1>hi</h1>
      </Modal>
        <p>When a transaction is made, it gets added to a pool of other transactions waiting to be confirmed. <br /> <br />
        Similar to blocks, transactions contain unique hash ids. They also contain more hashed information that says where the crypto was sent from and where it was sent to. <br /> <br />
        Bitcoin miners use computational power to go through the pool and verify all of these transactions by their hashes. If a hash doesn't match, it'll get rejected</p>
      </div>
    <Mining />
    </div>
  )
};

export default Transactions;