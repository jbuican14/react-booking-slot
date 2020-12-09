import React, { useState } from 'react';

import Calendar from './Calendar.component';
import './slot.styles.scss';
import { ReactComponent as VanSVG } from '../van.svg';
import CalendarSVG from '../calendar.svg';

const Slot = () => {
  const [date, setDate] = useState('');
  const [showComponent, setShowComponent] = useState(false);

  return (
    <>
      <div className="slot-container">
        <div className="slot-date">
          <p className="slot-selected-date">Thurs {date} </p>
          <div className="slot-text-wrapper">
            <VanSVG />
            <span className="slot-text">Earliest delivery</span>
          </div>
        </div>
        <div className="slot-calendar">
          <div
            className="slot-svg-calendar"
            style={{
              background: `url('${CalendarSVG}') no-repeat`,
              backgroundSize: 'contain',
            }}
          >
            <p className="slot-calendar-text">14</p>
          </div>
          <button onClick={() => setShowComponent(true)} className="slot-btn">
            Change <span className="slot-arrow-right">&gt;</span>
          </button>
        </div>
      </div>
      {showComponent && <Calendar />}
    </>
  );
};
export default Slot;
