function isSelectedDay(day, value) {
  console.log('day', day);
  console.log('value', value);
  return value.isSame(day, 'day');
}

export function beforeToday(day, value) {
  return day.isBefore(new Date(), 'day');
}

function isToday(day) {
  return day.isSame(new Date(), 'day');
}
export default function dayStyles(day, value) {
  if (beforeToday(day)) return 'before';
  if (isSelectedDay(day)) return 'selected';
  if (isToday(day)) return 'today';
  return '';
}
