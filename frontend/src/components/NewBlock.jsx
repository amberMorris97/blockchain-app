/* eslint-disable import/extensions */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Spline } from 'react-spline';
import SPLINE_SCENE_FIVE from '../blockchainanime/scene5';
import Modal from '../Modals/Modal.jsx';

const NewBlock = () => (
  <div name="newblocks" id="page-5">
    <div className="newBlock-page fullscreen">
      <span className="shrink-mobile">
        <Spline scene={SPLINE_SCENE_FIVE} />
      </span>
      <p>
        New blocks are added to the Bitcoin blockchain around every 10 minutes. Blocks will continue to be added as long as miners continue to verify transactions and get rewarded in crypto.
        <br />
        <br />
        Where does the money come from, you might ask? Think about the USD and how $1 = $1. Cryptocurrency works exactly the same; The general public simply agrees on its value.
        <br />
        <br />
        In summary, blockchain technology is really powerful. If this information did not satisfy your intrests, here are some links that cover important concepts.
        {' '}
        <a href="#">History of Blockchain Technology</a>
        {' '}
        <a href="#">Decentralization</a>
        {' '}
        <a href="#">Peer-to-Peer</a>
        {' '}
        <a href="#">Mining</a>
        <br />
        <br />
        I made this website to help some friends understand the technology as well as explore it more myself. Please visit the top of the page and consider donating and/or submitting organizations you are passionate about. Also, I am looking for a job.
      </p>
    </div>
  </div>
);

export default NewBlock;
