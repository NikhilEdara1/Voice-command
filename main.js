x=0;
y=0;
drawcircle="";
drawrect="";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="system is listening pls speak";
    recognition.start();
}
recognition.onresult=function(r){
    console.log(r);
    var c=r.results[0][0].transcript;
document.getElementById("status").innerHTML="speech has been recognised as:"+c;
if(c=="circle")
{
    console.log("circle");
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
document.getElementById("status").innerHTML="begining to draw a circle";
drawcircle="set";
}
if(c=="rectangle")
{
    console.log("rectangle");
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
document.getElementById("status").innerHTML="begining to draw a rectangle";
drawrect="set";
}
}
function setup()
{canvas=createCanvas(900,600);
}
function draw(){
    if(drawcircle=="set")
    {
        r=Math.floor(Math.random()*100);  
        circle(x,y,r);
        document.getElementById("status").innerHTML="circle has been drawn";
        drawcircle="";
    }
    if(drawrect=="set")
    {  
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="rectangle has been drawn";
        drawrect="";
    }
}