
var randomTexts=["Good","bad","better","best"];
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent('input', {bubbles: true});

var textbox = document.getElementsByClassName("_2_1wd")[1];
var timeId = setInterval(function(){
    if(stop){
    clearInterval(timeId);
}
textbox.innerHTML = randomTexts[Math.floor((Math.random() * randomTexts.length) + 0)];
textbox.dispatchEvent(event);
document.getElementsByClassName("EBaI7")[1].querySelector('button').click(); }, 1000);

var stop = false