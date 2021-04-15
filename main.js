song="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
function preload(){
song=loadSound("music.mp3");
}
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelloaded)
poseNet.on("pose",gotPoses);
}
function gotPoses(results){
if(results.length >0){
console.log(results);
scoreleftwrist=results[0].pose.keypoints[9].score;
console.log("score left wrist="+scoreleftwrist);
leftwristX=results[0].pose.leftWrist.x;
leftwristY=results[0].pose.leftWrist.y;
console.log("leftwristx= "+leftwristX+" ,leftwristy="+leftwristY);
rightwristX=results[0].pose.rightWrist.x;
rightwristY=results[0].pose.rightWrist.y;
console.log("rightwrist= "+rightwristX+" ,rightwristy="+rightwristY);
}
}
function modelloaded(){
    console.log("posenet is initialized");
}
function draw(){
image(video,0,0,600,500);
fill("#0000FF");
stroke("#0000FF");
if(scoreleftwrist>0.2){
circle(leftwristX,leftwristY,20);
InnumberleftwristY=Number(leftwristY);
removedecimals=floor(InnumberleftwristY);
volume=removedecimals/500;
document.getElementById("volume").innerHTML="volume="+volume;
song.setVolume(volume);
}
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}