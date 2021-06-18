import React, { useState } from 'react';
import Modal from './Modal.jsx';

const Donate = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="donate">
      <span className="donate-txt">Make a donation</span>
      <br />
      <button type="button" onClick={() => setOpen(true)} className="open-modal donate-btn">Donate</button>
      <Modal id="donate-modal" open={open} onClose={() => setOpen(false)}>
        <form>
          <select name="select-amount">
            <option value="$1">$1</option>
            <option value="$5">$5</option>
            <option value="$10">$10</option>
            <option value="$25">$25</option>
            <option value="$50">$50</option>
            <option value="$100">$100</option>
          </select>
        </form>
      </Modal>
    </div>
  );
};

export default Donate;
