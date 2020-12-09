import React, { useState, useEffect } from 'react';
import moment from 'moment';

import buildCalendar from './buildCalendar';
import CalendarHeader from './CalendarHeader.component';
import dayStyles, { beforeToday } from './styles';
import './calendar.styles.scss';

function Calendar() {
  const [calendar, setCalendar] = useState([]);
  const [date, setDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    setCalendar(buildCalendar(date));
    console.log('inside setCalendar');
    if (selectedDate === '') setSelectedDate(new Date());
    console.log(selectedDate);
  }, [date, selectedDate]);

  const isSelected = (item) => {
    if (item.isBefore(moment().startOf('month'))) return 'none';
    if (item.isAfter(moment().endOf('month'))) return 'none';
    if (item.isBefore(new Date(), 'day')) return 'before';
    if (item.isSame(selectedDate, 'day')) return 'selected';
    if (item.isSame(new Date(), 'day')) return 'today';
  };

  const dayOfTheWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  return (
    <>
      <div className="body">
        <div className="calendar">
          <CalendarHeader date={date} />

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
                  onClick={() => !beforeToday(item) && setSelectedDate(item)}
                  className={isSelected(item)}
                >
                  {item.format('D').toString()}
                </div>
              ))}
            </div>
          ))}
          <div>
            <button className="cancel-btn">Cancel, Don't Change</button>
            <button className="change-btn">Change Date</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
