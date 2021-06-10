import React from 'react'
import Blockchain from './Blockchain.jsx';
import OrgsForm from '../Modals/OrgsForm.jsx';
import Donate from '../Modals/Donate.jsx';

const App = () => {

  return (
    <div id="page-1">
    <div className="intro-page fullscreen">
      <h1>Whats Up</h1>
      <p className="app-intro">Blockchain Lesson - this application uses smart contract functionality to release funds to random charities you can also learn why the blockchain is so cool :)</p>
      <span className="blockchain-animation">~animation~</span>
      <OrgsForm />
      <Donate />
    </div>
      <Blockchain />
      </div>
  );
};

export default App;