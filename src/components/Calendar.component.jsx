import React, { useState, useEffect } from 'react';
import moment from 'moment';

import buildCalendar from './buildCalendar';
import CalendarHeader from './CalendarHeader.component';
import { beforeToday } from './styles';
import './calendar.styles.scss';

function Calendar({ onClick, onSubmit, data }) {
  const [calendar, setCalendar] = useState([]);
  const [date, setDate] = useState(moment());
  // const [selectedDate, setSelectedDate] = useState('');
  const [selectedDate, setSelectedDate] = useState(moment(data));

  useEffect(() => {
    setCalendar(buildCalendar(date));
    // let defaultDate = new Date();
    // if (selectedDate === '') setSelectedDate(defaultDate);
  }, [date, selectedDate]);

  const isSelected = (item) => {
    console.log('item', item);
    console.log('selectedDate', selectedDate);
    if (item.isBefore(moment().startOf('month'))) return 'none';
    if (item.isAfter(moment().endOf('month'))) return 'none';
    if (item.isBefore(new Date(), 'day')) return 'before';
    if (item.isSame(selectedDate, 'day')) return 'selected';
    if (item.isSame(new Date(), 'day')) return 'today';
  };

  const renderCalendar = () => {
    let defaultDate = new Date();
    if (selectedDate === '') setSelectedDate(defaultDate);
    return calendar.map((week, id) => (
      <div className="month" key={id}>
        {week.map((item, idx) => (
          <div
            key={idx}
            onClick={() => !beforeToday(item) && setSelectedDate(item)}
            className={
              // item._d.toString().slice(0, 10) === data.toString()
              item._d.toString().slice(3, 10) ===
              selectedDate._d.toString().slice(3, 10)
                ? 'selected'
                : isSelected(item)
            }
          >
            {console.log(selectedDate)}
            {item.format('D').toString()}
          </div>
        ))}
      </div>
    ));
  };
  const handleCancel = (e) => {
    onSubmit(moment(date).format('ddd MMM D').toString());
  };
  const handleChangeDate = (e) => {
    console.log('update the change', selectedDate);
    try {
      setSelectedDate(selectedDate); // NEW DEVELOPMENT
      onSubmit(moment(selectedDate).format('ddd MMM D').toString());
      console.log('selectedDate ====>', selectedDate);
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
          {renderCalendar()}
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
