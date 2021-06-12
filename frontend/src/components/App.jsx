const axios = require('axios');
import React, { useState, useEffect }from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Spline } from 'react-spline'
import fetchBlocks from '../redux/actions/fetchBlocks';
import Blockchain from './Blockchain.jsx';
import OrgsForm from '../Modals/OrgsForm.jsx';
import Donate from '../Modals/Donate.jsx';
import Header from './Header/Header.jsx';


const App = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector(state => state.blockDataReducer.blockchain);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchBlocks());
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  };

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