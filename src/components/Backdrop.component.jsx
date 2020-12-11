import React from 'react';

import './backdrop.styles.scss';

function Backdrop({ onClick, onClosed }) {
  // const handlerBackgropClicked = (e) => {
  //   return onClosed(false);
  // };
  return onClick ? (
    <div className="backdrop" onClick={(e) => onClosed(true)}></div>
  ) : null;
}
export default Backdrop;
