let audioPlayer = document.getElementById('audio');

function backgroundSound() {
    audioPlayer.volume = 0.2;
    audio.muted = muted;
    audioPlayer.play();
}

function shotSound() {
    let audio = new Audio('sound/shot.mp3');
    audio.volume = 0.1;
    audio.muted = muted;
    audio.play();
}

function boomSound() {
    let audio = new Audio('sound/boom.mp3');
    audio.volume = 0.3;
    audio.muted = muted;
    audio.play();
}


let btnSound = document.querySelector('.menu .sound');
let muted = false;

btnSound.onclick = function() {
    let iconSoundOn = document.querySelector('.menu .sound .sound-on');
    let iconSoundOff = document.querySelector('.menu .sound .sound-off');

    if (!muted) {
        iconSoundOn.classList.add('hidden');
        iconSoundOff.classList.remove('hidden');
        muted = true;
    } else {
        iconSoundOff.classList.add('hidden');
        iconSoundOn.classList.remove('hidden')
        muted = false;
    }
    audioPlayer.muted = muted;
}