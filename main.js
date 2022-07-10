song1= " ";
song2= " ";

song1_status= " ";
song2_status= " ";

function preload(){
    song1= loadSound("music.mp3");
    song2= loadSound("song2.mp3");
}


scoreRightWrist=0;
scoreLeftWrist=0;

leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;


function setup(){
    canvas= createCanvas(600,500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video,modelloaded);
    poseNet.on('Pose', gotPoses);

    
}

function modelloaded(){
    console.log("Pose Net is Initialized");
}

function draw(){
    image(video,0,0,600,500)
}

function play(){
    song.play();
}
