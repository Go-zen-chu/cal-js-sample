$(document).ready(function() {
  var d = new Date();
  var month = d.getMonth()+1;
  var day = d.getDate();
  // YYYY-MM-DD
  var todayStr = d.getFullYear() + '-' + (month<10 ? '0' : '') + month + '-' + (day<10 ? '0' : '') + day;

  var ed = getEventData();
  ed['defaultDate'] = todayStr;
  $('#calendar').fullCalendar(ed);
});
