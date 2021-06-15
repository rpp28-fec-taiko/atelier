import React from 'react';
import StyleThumbnail from './StyleThumbnail.jsx';

const StyleRow = (props) => (
  <div className='style-row'>
    {props.styles.map((style, idx) => <StyleThumbnail currentStyle={props.currentStyle} updateStyle={props.updateStyle} thumbnail={style.photos[0].thumbnail_url} id={style.style_id} name={style.name} key={idx}/>)}
  </div>
);

export default StyleRow;