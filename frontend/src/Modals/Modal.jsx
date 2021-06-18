/* eslint-disable no-undef */

import React from 'react';
import ReactDOM from 'react-dom';

// const MODAL_STYLES = {
//   position: 'fixed',
//   width: '50vw',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   backgroundColor: '#FFF',
//   padding: '50px',
//   borderRadius: '25px',
//   zIndex: 1000,
// };

// const OVERLAY_STYLES = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(0, 0, 0, .9)',
//   zIndex: 1000,
// };

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      onClose(true);
    }
  });

  return ReactDOM.createPortal(
    <>
      <div className="overlay" />
      <div className="modal">
        <button type="button" className="closeModal" onClick={onClose}>X</button>
        {children}
      </div>
    </>,
    document.getElementById('portal'),
  );
}
