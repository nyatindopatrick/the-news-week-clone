const dateUpdate = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const d = new Date(new Date().toString());
  const dayName = days[d.getDay()];

  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
  ] = dateTimeFormat.formatToParts(d);
  return `${dayName}, ${month} ${day}, ${year}`;
};

window.addEventListener('load', (event) => {
  document.getElementById('today').innerHTML = dateUpdate();
});
