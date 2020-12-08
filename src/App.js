import React from 'react';
import Slot from './components/Slot.component';

function App() {
  return (
    <div className="container">
      <h1 className="heading">Choose your delivery day</h1>
      <p className="sub-heading">Delivery is always free</p>
      <Slot />
    </div>
  );
}

export default App;
