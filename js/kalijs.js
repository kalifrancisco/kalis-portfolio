// play audio functions:
function toggleAudioPlayer(n) {
    const audio = document.getElementById('waveAudio' + n);
    const img = document.getElementById('playImg' + n);
 
    // if this one is currently playing, pause it
    if (audio.dataset.playing) {
        audio.pause();
        delete audio.dataset.playing;
        img.src = 'images/play/play' + n + '-default.png';
        return;
    }
 
    // pause any other track that's currently playing
    document.querySelectorAll('audio[id^="waveAudio"]').forEach(otherAudio => {
        if (otherAudio.dataset.playing) {
            const otherN = otherAudio.id.replace('waveAudio', '');
            otherAudio.pause();
            delete otherAudio.dataset.playing;
            document.getElementById('playImg' + otherN).src = 'images/play/play' + otherN + '-default.png';
        }
    });
 
    audio.play();
    audio.dataset.playing = 'true';
    img.src = 'images/play/pause-' + n + '.png';
 
    // when the track finishes, reset to default
    audio.onended = () => {
        delete audio.dataset.playing;
        img.src = 'images/play/play' + n + '-default.png';
    };
}

// loading:
window.addEventListener('load', function () {
  const loader = document.getElementById('loading-screen');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 1000); 
    }, 1000); 
  }
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
  threshold: .3
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.style.backgroundColor = '#171818'; 
    } else {
      document.body.style.backgroundColor = ''; // default color
    }
  });
}, observerOptions);

experienceSections.forEach(section => observer.observe(section));


// back to top:
document.querySelectorAll('.top-button:not(#copyEmailBtn), .top-button-white').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault(); 
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


// scrolled class
document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navfixed');
	const scrollThreshold = 50;

	window.addEventListener('scroll', function () {
		if (window.scrollY > scrollThreshold) {
			nav.classList.add('scrolled');
		} else {
			nav.classList.remove('scrolled');
		}
	});
});