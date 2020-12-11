import React, { useEffect, useState } from 'react';
import moment from 'moment';

import Calendar from './Calendar.component';
import Backdrop from './Backdrop.component';
import './slot.styles.scss';
import { ReactComponent as VanSVG } from '../van.svg';
import CalendarSVG from '../calendar.svg';

const Slot = () => {
  const [date, setDate] = useState(moment());
  const [showComponent, setShowComponent] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleSelectedDate = (d) => {
    setSelectedDate(date.format('ddd MMM D').toString());
  };

  useEffect(() => {
    setupDate(); //setDate(new Date());
    if (!selectedDate) handleSelectedDate(selectedDate);
  }, [selectedDate, handleSelectedDate]);

  const setupDate = () => {
    setDate(new Date());
  };

  const onBackdropClick = (value) => {
    setShowComponent(false);
  };

  const onUpdateSubmit = (value) => {
    if (value) setSelectedDate(value);

    setShowComponent(false);
  };

  return (
    <>
      {/* <Backdrop show={showComponent} onClick={onBackdropClick} /> */}
      {showComponent && (
        <Backdrop onClick={showComponent} onClosed={onBackdropClick} />
      )}
      <div className="slot-container">
        <div className="slot-date">
          <p className="slot-selected-date"> {selectedDate} </p>
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
            <p className="slot-calendar-text">
              {selectedDate.split(' ').splice(2, 1)}
            </p>
          </div>
          <button onClick={() => setShowComponent(true)} className="slot-btn">
            Change{' '}
            <span className="slot-arrow-right">
              <svg
                width="17"
                height="26"
                id="right"
                viewBox="0 0 17 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.53644 24.7002L16 12.9187L1 0.700195"
                  stroke="#1d6c93"
                  strokeWidth="3.15"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      {showComponent && (
        <Calendar
          onClick={showComponent}
          onSubmit={onUpdateSubmit}
          data={selectedDate}
        />
      )}
    </>
  );
};
export default Slot;
