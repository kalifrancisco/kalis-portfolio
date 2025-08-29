
// etc. page audio function:
let playing = false; 
function toggleAudioWave() {
    const audio = document.getElementById("waveAudio");
    const audioImg = document.querySelector(".waves-img");
    if (playing) {
        audio.pause();
        audio.currentTime = 0;
        audioImg.src = "images/play-beach.png"; // back to play
    } else {
        audio.play();
        audioImg.src = "images/pause-beach.png"; // switch to pause
    }
    playing = !playing;
}

let playingF = false; 
function toggleAudioForest() {
    const audio = document.getElementById("forestAudio");
    const audioImg2 = document.querySelector(".for-img");
    if (playingF) {
        audio.pause();
        audio.currentTime = 0;
        audioImg2.src = "images/play-forest.png"; // back to play
    } else {
        audio.play();
        audioImg2.src = "images/pause-forest.png"; // switch to pause
    }
    playingF = !playingF;
}

// jump to work
document.addEventListener('DOMContentLoaded', function () {
  const workJump = document.querySelector('.work-jump');
  if (workJump) {
    workJump.addEventListener('click', function (e) {
      e.preventDefault(); // Stop the link from navigating
      document.querySelector('.project-grid-wrap').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
});



// projects jumping:
document.querySelectorAll('.left-col a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// footer:
document.addEventListener("DOMContentLoaded", function () {
    const grassImage = document.querySelector(".grass-wrap img");
    const footerText = document.querySelector(".footer-text");

    grassImage.addEventListener("mouseenter", () => {
        footerText.classList.add("visible");
        console.log("WORKED");
    });

    grassImage.addEventListener("mouseleave", () => {
        footerText.classList.remove("visible");
    });
});

// progress bar:
  window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    console.log("PROGRESS BAAR");
    document.getElementById('scroll-progress-bar').style.width = scrollPercent + '%';
  });


// loading:
window.addEventListener('load', function () {
  const loader = document.getElementById('loading-screen');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500); 
    }, 500); 
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const dateElement = document.querySelector('.loading-date');

  const monthNames = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];

  const currentDate = new Date();
  const month = monthNames[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  // Use backticks for template literals here:
  const formattedDate = `${month} ${day}, YEAR ${year}`;

  if (dateElement) {
    dateElement.textContent = formattedDate;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const videoElement = document.querySelector('.loading-vid');
  const sourceElement = videoElement.querySelector('source');

  let currentIndex = sessionStorage.getItem('natureIndex');
  if (!currentIndex) currentIndex = 1;
  else currentIndex = parseInt(currentIndex, 10);

  // Set video src
  sourceElement.src = `video/nature${currentIndex}.mp4`;
  videoElement.load();

  // Increment index for next load
  currentIndex++;
  if (currentIndex > 7) currentIndex = 1;

  // Store updated index for next reload
  sessionStorage.setItem('natureIndex', currentIndex);
});



// popup:
document.querySelectorAll('.media-flex').forEach(mediaFlex => {
	const icon = mediaFlex.querySelector('.text-media-img');
	const popupId = mediaFlex.dataset.popup;
	const popup = document.querySelector(`.${popupId}`);
	let isOpen = false;

	mediaFlex.addEventListener('click', () => {
		// Remove any existing spin classes first
		icon.classList.remove('spin-right', 'spin-left');

		isOpen = !isOpen;

		icon.classList.add(isOpen ? 'spin-right' : 'spin-left');

		// Swap icon
		icon.src = isOpen ? 'images/pink-minus.png' : 'images/pink-plus.png';

		// Toggle popup visibility
		if (isOpen) {
			popup.classList.add('active');
			mediaFlex.classList.add('active');
		} else {
			popup.classList.remove('active');
			mediaFlex.classList.remove('active');
		}
	});
});



// about bg:
const experienceSections = document.querySelectorAll('.bg-scroll');

const observerOptions = {
  threshold: 0.5 
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.style.backgroundColor = '#2B2E2E'; 
    } else {
      document.body.style.backgroundColor = ''; // default color
    }
  });
}, observerOptions);

experienceSections.forEach(section => observer.observe(section));


// back to top:
document.querySelectorAll('.top-button, .top-button-white').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault(); 
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


window.addEventListener("load", () => {
  const sticker = document.querySelector(".pixel-sticker");
  if (sticker) {
    sticker.classList.add("rotate-on-load");
  }
});