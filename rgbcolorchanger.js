function colorChanger(){
  var day = new Date();
  var hours = day.getHours();
  var minutes = day.getMinutes();
  var seconds = day.getSeconds();
  changeBackground(hours,minutes,seconds);
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  document.getElementById('body')
  setTimeout(function() {startTime()}, 500);

}
function changeBackground(hours, minutes,seconds){
  var totalMin = (hours * 60) + minutes;
  var hue = totalMin * 0.25;
  var sat = minutes + 20;
  var light = seconds + 15;

}
function checkTime(i){
  if(i < 10){
    i = "0" + i ;
    return i;
  }
}
function startTime(){
  var minutes = checkTime(minutes);
  var seconds = checkTime(minutes);
}
