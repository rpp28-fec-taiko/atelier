import React from 'react';
import StyleThumbnail from './StyleThumbnail.jsx';

const StyleRow = (props) => (
  <div className='style-row'>
    {props.styles.map(style => <StyleThumbnail thumbnail={style.photos[0].thumbnail_url} />)}
  </div>
);

export default StyleRow;