export default function buildCalendar(date) {
  const startDay = date.clone().startOf('month').startOf('isoWeek');
  const endDay = date.clone().endOf('month').endOf('isoweek');

  const day = startDay.clone().subtract(1, 'day');
  const calendar = [];

  while (day.isBefore(endDay, 'day')) {
    //if day is still before the end day
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone())
    );
  }

  return calendar;
}
