import React from 'react';
import CharacteristicBar from './characteristicBar.jsx';

const PdtBreakdown = ({ characteristics }) => {
  return (
    <div className='reviews-pdt-breakdown'>
      {
        characteristics.map((item, idx) => <CharacteristicBar key={idx} label={item.name} value={item.value}/>)
      }
    </div>
  );
};

export default PdtBreakdown;