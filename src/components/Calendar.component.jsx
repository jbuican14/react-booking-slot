import React, { useState, useEffect } from 'react';
import moment from 'moment';

import buildCalendar from './buildCalendar';
import CalendarHeader from './CalendarHeader.component';
import dayStyles, { beforeToday } from './styles';
import './calendar.styles.scss';

function Calendar({ onClick, onSubmit }) {
  // console.log(onSubmit);
  const [calendar, setCalendar] = useState([]);
  const [date, setDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    setCalendar(buildCalendar(date));
    console.log('inside setCalendar');
    let defaultDate = new Date();
    if (selectedDate === '') setSelectedDate(defaultDate);

    console.log(selectedDate);
  }, [date, selectedDate]);

  const isSelected = (item) => {
    if (item.isBefore(moment().startOf('month'))) return 'none';
    if (item.isAfter(moment().endOf('month'))) return 'none';
    if (item.isBefore(new Date(), 'day')) return 'before';
    if (item.isSame(selectedDate, 'day')) return 'selected';
    if (item.isSame(new Date(), 'day')) return 'today';
  };

  const handleCancel = (e) => {
    console.log('cancel the change', selectedDate);
  };
  const handleChangeDate = (e) => {
    console.log('update the change', selectedDate);
    // setDate(selectedDate);
    try {
      // selectedDate.format('ddd MMM D').toString();
      onSubmit(moment(selectedDate).format('ddd MMM D').toString());
      console.log(selectedDate);
    } catch (e) {
      console.log(e);
    }
  };

  const dayOfTheWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  return (
    <>
      <div className={'body ' + onClick}>
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
            <button className="cancel-btn" onClick={() => handleCancel()}>
              Cancel, Don't Change
            </button>
            <button className="change-btn" onClick={() => handleChangeDate()}>
              Change Date
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
