export default function buildCalendar(date) {
  const startDay = date.clone().startOf('month').startOf('isoWeek');
  const endDay = date.clone().endOf('month').endOf('isoweek');
  const startDay1 = date.clone().startOf('month');
  const endDay1 = date.clone().endOf('month');

  console.log('startday ', startDay1);
  console.log('end day ', endDay1);
  const day = startDay.clone().subtract(1, 'day');
  const calendar = [];

  while (day.isBefore(endDay, 'day')) {
    // use moment method
    //if day is still before the end day
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone())
    );
  }

  return calendar;
}
