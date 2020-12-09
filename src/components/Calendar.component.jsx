import React, { useState, useEffect } from 'react';
import moment from 'moment';

import buildCalendar from './buildCalendar';
import './calendar.styles.scss';

function Calendar() {
  const [calendar, setCalendar] = useState([]);
  const [date, setDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    setCalendar(buildCalendar(date));
    console.log(selectedDate);
    if (selectedDate === '') setSelectedDate(new Date());
  }, [date, selectedDate]);

  const isSelected = (item, value) => {
    // dayStyles(item, value)
    // setSelectedDate(item);
    // console.log(item.isSame(selectedDate, 'day'));
    if (item.isSame(selectedDate, 'day')) return 'selected';
  };

  const dayOfTheWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div className="body">
      <div className="day-name">
        {dayOfTheWeek.map((d, i) => (
          <div className="day-name" key={i}>
            {d}
          </div>
        ))}
      </div>
      {calendar.map((week, id) => (
        <div className="month" key={id}>
          {week.map((item, idx) => (
            <div
              key={idx}
              className="day"
              onClick={() => setSelectedDate(item)}
              className={isSelected(item)}
            >
              {item.format('D').toString()}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
