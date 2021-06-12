import React from 'react';

const CharacteristicBar = () => {
  return (
    <div className='characteristic-bar'>
       <div>Label</div>
       <div className='characteristic-bar-container'>
        <input name='range' className='characteristic-range' type='range' min='0' max='100' value='100' readOnly/>
       </div>
       <div>Range meaning</div>
    </div>
  );
};

export default CharacteristicBar;