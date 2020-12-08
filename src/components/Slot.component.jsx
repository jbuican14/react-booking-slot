import React, { useState } from 'react';

import Calendar from './Calendar.component';

function Slot() {
  const [date, setDate] = useState('');
  const [showComponent, setShowComponent] = useState(false);

  return (
    <>
      <div>
        <p>{date} </p>
        <span>Earliest delivery</span>
        <img src="" />
        <button onClick={() => setShowComponent(true)}>Change</button>
        {showComponent ? <Calendar /> : null}
      </div>
    </>
  );
}
export default Slot;
