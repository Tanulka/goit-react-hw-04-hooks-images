import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal(props) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      props.onClose();
    }
  }

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      props.onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <img src={props.largeImageUrl} alt={props.tags} />
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  largeImageUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
export default Modal;
