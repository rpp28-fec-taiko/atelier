import React from 'react';

const Modal = ({ url, hideModal }) => {
  let handleModalBtnClick = () => {
    hideModal();
  }

  return (
    <div className='reviews-tile-body-modal'>
      <div className='reviews-tile-body-modal-main'>
        <div className='reviews-tile-body-modal-img'>
          <img src={url} height='100%' width='100%'/>
        </div>
        <button type='button' onClick={handleModalBtnClick} style={{cursor: 'pointer'}}>  CLOSE </button>
      </div>
    </div>
  )
}

export default Modal;