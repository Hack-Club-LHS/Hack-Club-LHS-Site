var element = document.getElementById('welcomToSlack');
element.onclick = function redirect(){
  location.href = "https://slack.hackclub.com/";
};
$('body').eq(0).css('backgroundColor','hsl(208,44%,38%)');

var d = 1000;
for(var i=50; i<=50; i=i+0.1){ //i represents the lightness
    d  += 10;
    (function(index, duration){
        setInterval(function(){
            $('body').eq(0).css('backgroundColor','hsl(51,100%,'+index'%)');
        }, duration);
    }),(i,d);
}
