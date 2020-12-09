import React from 'react';

import Slot from './components/Slot.component';
import './app.styles.scss';

function App() {
  return (
    <>
      <div className="container">
        <h1 className="heading">Choose your delivery day</h1>
        <p className="sub-heading">Delivery is always free</p>
      </div>
      <Slot />
    </>
  );
}

export default App;
