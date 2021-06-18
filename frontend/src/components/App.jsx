/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import OrgsForm from '../Modals/OrgsForm.jsx';
import Blockchain from './Blockchain.jsx';
import Donate from '../Modals/Donate.jsx';
import Header from './Header/Header.jsx';

const { fetchSingleBlock } = require('../redux/actions/fetchBlocks');

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchSingleBlock());
    setLoading(true);
  }, [dispatch]);

  // useEffect(() => {
  //   if (blockchain.length > 0) {
  //     const { hash } = blockchain[0];
  //     dispatch(fetchSingleBlock(hash));
  //   }
  // }, [blockchain, dispatch]);

  if (!isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div name="main">
      <div className="intro-page fullscreen">
        <Header />
        <h1>Whats Up</h1>
        <p className="app-intro">Blockchain Lesson - this application uses smart contract functionality to release funds to random charities you can also learn why the blockchain is so cool :)</p>
        <OrgsForm />
        <Donate />
      </div>
      <Blockchain />
    </div>
  );
};

export default App;
