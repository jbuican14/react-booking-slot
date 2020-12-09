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

  useEffect(() => {
    setDate(new Date());
    console.log('SLOT', date.format('ddd MMM Do').toString(), date);
    const deliveryDate = date.format('ddd MMM Do').toString();
    if (!selectedDate) setSelectedDate(date.format('ddd MMM D').toString());
    console.log(selectedDate);
  }, []);

  const onBackdropClick = (value) => {
    setShowComponent(false);
    console.log(value);
  };

  const onUpdateSubmit = (value) => {
    console.log(value);
    if (value) setSelectedDate(value);
    setShowComponent(false);
  };

  const setEarliestDelivery = () => {
    console.log(date.format('ddd MMM D').toString());
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
              {console.log(selectedDate)}
            </p>
          </div>
          <button onClick={() => setShowComponent(true)} className="slot-btn">
            Change <span className="slot-arrow-right">&gt;</span>
          </button>
        </div>
      </div>
      {showComponent && (
        <Calendar onClick={showComponent} onSubmit={onUpdateSubmit} />
      )}
    </>
  );
};
export default Slot;
