import React from 'react';
import CharacteristicBar from './characteristicBar.jsx';

const PdtBreakdown = ({ characteristics }) => {
  let characteristicNames = [];
  for (let key in characteristics) {
    characteristics[key].name = key;
    characteristics[key].value = Number(characteristics[key].value).toFixed(1);
    characteristicNames.push(characteristics[key]);
  }
  // console.log('names', characteristicNames);

  return (
    <div className='reviews-pdt-breakdown'>
      {
        characteristicNames.map((item, idx) => <CharacteristicBar key={idx} label={item.name} value={item.value}/>)
      }
    </div>
  );
};

export default PdtBreakdown;