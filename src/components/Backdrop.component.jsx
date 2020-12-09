import React, { useState } from 'react';

import './backdrop.styles.scss';

function Backdrop({ onClick, onClosed }) {
  const [backdrop, setBackdrop] = useState(true);
  const handlerBackgropClicked = (e) => {
    console.log('clicked', backdrop);
    return onClosed(false);
  };
  return onClick ? (
    <div className="backdrop" onClick={(e) => onClosed(true)}></div>
  ) : null;
}
export default Backdrop;
