//Video by Julia Larson from Pexels
var video1 = document.getElementById("video1");
var video2 = document.getElementById("video2");

function playVideo(vid) {
    if(vid == document.getElementById("video1")) {
        video1.play();
        console.log("in")
    }   

    if(vid == document.getElementById("video2")) {
        video2.play();
        console.log("in")
    }   
}

function pauseVideo(vid) {
    if(vid == document.getElementById("video1")) {
        video1.pause();
        console.log("out")
    }   

    if(vid == document.getElementById("video2")) {
        video2.pause();
        console.log("out")
    }   
}