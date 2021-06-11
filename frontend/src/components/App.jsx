import React from 'react'
import { Spline } from 'react-spline'
import Blockchain from './Blockchain.jsx';
import OrgsForm from '../Modals/OrgsForm.jsx';
import Donate from '../Modals/Donate.jsx';
import Header from './Header/Header.jsx';

const App = () => {

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