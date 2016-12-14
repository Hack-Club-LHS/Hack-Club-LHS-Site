var element = document.getElementById('welcomToSlack');
element.onclick = function redirect(){
  window.top,location.href = "https://slack.hackclub.com/";
};
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
var yPosition = 0;

function setup(){
  var canvas = createCanvas(canvasWidth,canvasHeight);
  canvas.parent("headers");
  frameRate(60);
}
function draw(){
  colorMode(HSB);
  background(51,100,100);
  yPosition= yPosition - 1  ;
  if(yPosition < 0){
  yPosition =canvasHeight;
}
line(0,yPosition,canvasWidth,yPosition);

}
