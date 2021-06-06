import React from 'react';

const Modal = ({ url, hideModal }) => {
  let handleModalBtnClick = () => {
    hideModal();
  }

  return (
    <div className='review-tile-body-modal'>
      <div className='review-tile-body-modal-main'>
        <div className='review-tile-body-modal-img'>
          <img src={url} height='100%' width='100%'/>
        </div>
        <button type='button' onClick={handleModalBtnClick}>  CLOSE </button>
      </div>
    </div>
  )
}

export default Modal;