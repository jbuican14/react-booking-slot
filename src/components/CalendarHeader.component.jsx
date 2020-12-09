import React from 'react';

import './calendarHeader.styles.scss';

export default function CalendarHeader({ date }) {
  function currentMonthName() {
    return date.format('MMMM');
  }
  function currentYear() {
    return date.format('YYYY');
  }

  return (
    <div className="header">
      <div className="current">
        {currentMonthName()} {currentYear()}
      </div>
    </div>
  );
}
