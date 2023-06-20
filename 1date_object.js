//1 Date Object
function showDay(getdate){

  const date = new Date(getdate);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];

}
const currentDate = new Date();
const formatdate = currentDate.toISOString().split('T')[0];
const dayweek = showDay(formatdate);
console.log(dayweek);