video="";
status="";
function setup(){
    canvas=createCanvas(400,480);
    canvas.center();
   video=createCapture(VIDEO);
   video.size(400,480);
   video.hide();
}
function preload(){
 
}
function draw(){
    image(video,0,0,400,480);
}
function start(){
  objectDetected=ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML="status detecting objects";
}
function modelLoaded(){
    console.log("Model loaded!");
    status=true;
}