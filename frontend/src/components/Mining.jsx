import React, { useState, useEffect } from 'react';
import NewBlock from './NewBlock.jsx';

const Mining = () => {

  return (
    <div id="page-4">
      <div className="mining-page fullscreen">
        <h1>Mining</h1>
      </div>
      <NewBlock />
    </div>
  );
};

export default Mining;