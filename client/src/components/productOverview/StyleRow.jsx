import React from 'react';
import StyleThumbnail from './StyleThumbnail.jsx';

const StyleRow = (props) => (
  <div className='style-row'>
    {props.styles.map(style => <StyleThumbnail updateStyle={props.updateStyle} thumbnail={style.photos[0].thumbnail_url} key={style.name}/>)}
  </div>
);

export default StyleRow;