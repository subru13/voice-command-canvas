x = 0;
y = 0;
screen_width = 0;
screen_height =0;

apple = "";
speak_data ="";
to_number="";
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
  for (i=1;i<=to_number;i++){
    Math.floor()
    x=Math.random()x700;
    y=yx400;   
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
to_number=Number(content);

if(Number.isInteger(to_number){

})

createCanvas(){
  screenWidth=window.innerWidth;
  screen_height=screen_height-150;
  canvas.position(0,150);
}