import React, { useState } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
