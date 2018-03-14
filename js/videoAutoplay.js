var video = document.getElementById("autoplayVid");
var btn = document.getElementById("autoplayBtn");
var btnImage = document.querySelectorAll(".autoplay-button-image")[0];

btn.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        btnImage.classList.remove("play-button-image");
        video.classList.remove("video-stopfade");
    } else {
        video.pause();
        btnImage.classList.add("play-button-image");
        video.classList.add("video-stopfade");
    }
})