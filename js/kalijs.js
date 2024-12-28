// mobile drop down menu:
document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});

// etc. page audio function:
let playing = false; 
function toggleAudioWave() {
    const audio = document.getElementById("waveAudio");
    const audioImg = document.querySelector(".waves-img");
    if (playing) {
        audio.pause(); // pause
        audio.currentTime = 0; // reset
        audioImg.classList.remove("playing");
    } else {
        audio.play(); // play
        audioImg.classList.add("playing");
    }
    playing = !playing; 
}


let playingF = false; 
function toggleAudioForest() {
    const audio = document.getElementById("forestAudio");
    const audioImg2 = document.querySelector(".for-img");
    if (playingF) {
        audio.pause(); // pause
        audio.currentTime = 0; // reset
        audioImg2.classList.remove("playing");
    } else {
        audio.play(); // play
        audioImg2.classList.add("playing");
    }
    playingF = !playingF; 
}


