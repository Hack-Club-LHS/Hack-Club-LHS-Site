function startColorChanger(){
  var day = new Date();
  var hours = day.getHours();
  var minutes = day.getMinutes();
  var seconds = day.getSeconds();
  changeBackground(hours,minutes,seconds);
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  seTimeout(function() {startColorChanger()}, 500);

}
function changeBackground(hours, minutes,seconds){
  var totalMin = (hours * 60) + minutes;
  var hue = totalMin * 0.25;
  var sat = minutes + 20;
  var light = seconds + 15;

}