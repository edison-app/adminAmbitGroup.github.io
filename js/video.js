VideoPlayer1 = document.getElementById('video1');
VideoPlayer2 = document.getElementById('video2');
VideoPlayer1.addEventListener('ended', videoLooper, false);

function videoLooper()
{
    VideoPlayer2.play();
    $(VideoPlayer2).show();
    $(VideoPlayer1).hide();
}