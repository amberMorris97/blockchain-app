import React from 'react'
import SPLINE_SCENE from '../blockchainanime/scene';
import Blockchain from './Blockchain.jsx';
import OrgsForm from '../Modals/OrgsForm.jsx';
import Donate from '../Modals/Donate.jsx';
import Header from './Header/Header.jsx';
import { Spline } from 'react-spline'

const App = () => {

  return (
    <div name="main">
      <div className="intro-page fullscreen">
      <Header />
        <h1>Whats Up</h1>
        <p className="app-intro">Blockchain Lesson - this application uses smart contract functionality to release funds to random charities you can also learn why the blockchain is so cool :)</p>
        <span
        className="blockchain-animation">      <Spline scene={SPLINE_SCENE} /></span>
        <OrgsForm />
        <Donate />
      </div>
      <Blockchain />
    </div>
  );
};

export default App;