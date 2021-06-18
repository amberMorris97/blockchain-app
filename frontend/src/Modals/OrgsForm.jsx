import React, { useState } from 'react';
import Modal from './Modal.jsx';

const OrgsForm = () => {
  const [orgLink, setOrgLink] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrgLink('');
    setUserEmail('');
  };

  return (
    <div className="org-form">
      <span className="org-suggest-txt">org suggestions?</span>
      <br />
      <button type="button" onClick={() => setOpen(true)} className="open-modal org-btn">Submit An Organization!</button>
      <Modal id="org-modal" open={open} onClose={() => setOpen(false)}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input name="org" type="text" placeholder="ex. gofundme.com/<your-organization>" onChange={(e) => setOrgLink(e.target.value)} value={orgLink} />
          <input name="email" type="text" placeholder="ex. myName@gmail.com" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} />
          <input type="submit" value="Submit" />
        </form>
      </Modal>
    </div>
  );
};

export default OrgsForm;
