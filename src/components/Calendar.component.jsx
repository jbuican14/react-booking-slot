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
              item._d.toString().slice(3, 10) ===
              selectedDate._d.toString().slice(3, 10)
                ? 'selected'
                : isSelected(item)
            }
          >
            {item.format('D').toString()}
          </div>
        ))}
      </div>
    ));
  };
  const handleCancel = (e) => {
    onSubmit();
  };
  const handleChangeDate = (e) => {
    try {
      setSelectedDate(selectedDate);
      onSubmit(moment(selectedDate).format('ddd MMM D').toString());
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
              <div className={'day-naming'} key={i}>
                {d}
              </div>
            ))}
          </div>
          {renderCalendar()}
          <div className="button-wrapper">
            <button
              className="show-btns cancel-btn"
              onClick={() => handleCancel()}
            >
              Cancel,
              <br /> Don't Change
            </button>
            <button
              className="show-btns change-btn"
              onClick={() => handleChangeDate()}
            >
              Change Date
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
