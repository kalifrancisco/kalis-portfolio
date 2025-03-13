
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

// iterating: cheeky footer
document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
        "Your time is appreciated",
        "You desrve the $7 coffee you bought today (by the way)",
        "Affirmation of the day: I will not make a git commit at 2am",
        "Lurking in the footer...heyyy",
        "I'm watching Severence, its good",
        'This is one of my <a href="https://www.entirestudios.com/?gad_source=1&gclid=Cj0KCQiAhvK8BhDfARIsABsPy4hFONDz3HkcICNqKnuTMdTOIMQzQLq4hlIKnn13TDrpIlsysV8XXY0aAoAgEALw_wcB" target="_blank">fav websites</a> right now.`',
        "Hiiiiiiii iiiiii",
        "Has anyone caught on",
        "You deserve a sweet treat today",
        "Thanks for stopping by, I had fun making this",
        "Don't look at the names of my git commits",
        'Adoring this <a href="https://eminente.art/">website</a>" at the moment',
        "It's cold in Michigan right now"
    ];

    let index = 0;
    const textElement = document.getElementById("rotating-text");

    function changePhrase() {
        textElement.style.opacity = "0";

        setTimeout(() => {
            index = (index + 1) % phrases.length;
            textElement.textContent = phrases[index];
            textElement.style.opacity = "1";
        }, 1000); 
    }
    //  3 minutes = (180,000 ms)
    setInterval(changePhrase, 2000);
    textElement.style.transition = "opacity 1s ease-in-out";
});

// jump to projects function:
let mouse = document.getElementById("mouse-click");
mouse.addEventListener("click", function() {
    let targetDiv = document.querySelector(".new-project-index-wrap");
    targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
});

mouse.addEventListener("mouseover", function() {
    let textChange = document.querySelector(".mouse-subtext");
    textChange.style.opacity = ".6"; 
});

mouse.addEventListener("mouseout", function() {
    let textChange = document.querySelector(".mouse-subtext");
    textChange.style.opacity = ""; 
});


// INDEX CARD FAN:
document.addEventListener("DOMContentLoaded", function () {
    const fanWrap = document.querySelector(".fan-wrap");
    const fans = document.querySelectorAll(".sticker");
    const fanCenter = document.querySelector(".fan-center");

    function updateFanPositions() {
        const centerWidth = fanCenter.offsetWidth; // Get the width of the fan-center
        const scaleFactor = centerWidth * 0.6; // Adjust scaling factor based on image size

        fans.forEach(fan => {
            fan.style.opacity = "0";
            fan.style.transform = "translateX(0) rotate(0deg)";
        });

        fanWrap.addEventListener("mouseenter", () => {
            fanCenter.style.transform = "translateY(-3px)";
            fanCenter.style.animation = "none";

            fans.forEach((fan, index) => {
                setTimeout(() => {
                    fan.style.opacity = "1";
                    fan.style.transition = "transform 0.4s ease-out, opacity 0.4s ease-in";

                    switch (index) {
                        case 0:
                            fan.style.transform = `rotate(-10deg) translateX(${-scaleFactor * 1.5}px) translateY(${scaleFactor * 0.8}px)`;
                            break;
                        case 1:
                            fan.style.transform = `rotate(10deg) translateX(${-scaleFactor}px) translateY(${-scaleFactor * 0.4}px)`;
                            break;
                        case 2:
                            fan.style.transform = `rotate(12deg) translateX(${scaleFactor}px) translateY(${-scaleFactor * 0.35}px)`;
                            break;
                        case 3:
                            fan.style.transform = `rotate(8deg) translateX(${scaleFactor * 1.3}px) translateY(${scaleFactor * 0.9}px)`;
                            break;
                    }
                }, index * 40);
            });
        });

        fanWrap.addEventListener("mouseleave", () => {
            fanCenter.style.transform = "translateY(0)";

            fans.forEach((fan, index) => {
                setTimeout(() => {
                    fan.style.opacity = "0";
                    fan.style.transform = "translateX(0) rotate(0deg)";
                    fanCenter.style.opacity = "1";
                    fanCenter.style.animation = "bounce 3s ease-in-out infinite";
                }, index * 62);
            });
        });
    }

    updateFanPositions(); // Run once on load
    window.addEventListener("resize", updateFanPositions); // Update when resizing
});
