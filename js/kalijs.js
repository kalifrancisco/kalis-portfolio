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

// square cursor:
(function () {
  const GRADIENT_COLORS = [
    '#DB0497',
    '#EE2B80',
    '#DD3735',
    '#F25E2C',
    '#E9B72F'
  ];

  // ---- tuning knobs ----
  const SIZE = 4;
  const GRID_SIZE = 14;   

  let lastGridX = null, lastGridY = null;
  let colorCursor = 0;

  const cursorDot = document.createElement('div');
  cursorDot.className = 'fake-cursor';
  document.body.appendChild(cursorDot);

  function nextColor() {
    const c = GRADIENT_COLORS[colorCursor % GRADIENT_COLORS.length];
    colorCursor++;
    return c;
  }

  function snapToGrid(x, y) {
    return [
      Math.round(x / GRID_SIZE) * GRID_SIZE,
      Math.round(y / GRID_SIZE) * GRID_SIZE
    ];
  }

  // shortest taxicab path between two grid points:
  function gridPath(x0, y0, x1, y1) {
    const points = [];
    const dx = Math.sign(x1 - x0);
    const dy = Math.sign(y1 - y0);
    let cx = x0, cy = y0;

    while (cx !== x1) {
      cx += dx * GRID_SIZE;
      points.push([cx, cy]);
    }
    while (cy !== y1) {
      cy += dy * GRID_SIZE;
      points.push([cx, cy]);
    }
    return points;
  }

  function spawnSquare(x, y) {
    const sq = document.createElement('div');
    sq.className = 'px';
    sq.style.width = SIZE + 'px';
    sq.style.height = SIZE + 'px';
    sq.style.background = nextColor();
    sq.style.setProperty('--x', (x - SIZE / 2) + 'px');
    sq.style.setProperty('--y', (y - SIZE / 2) + 'px');
    sq.style.transformOrigin = 'center';

    document.body.appendChild(sq);
    sq.addEventListener('animationend', () => sq.remove());
  }

  window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';

    const [gx, gy] = snapToGrid(e.clientX, e.clientY);

    if (lastGridX === null) {
      lastGridX = gx;
      lastGridY = gy;
      spawnSquare(gx, gy);
      return;
    }
    
    if (gx === lastGridX && gy === lastGridY) return; 

    const path = gridPath(lastGridX, lastGridY, gx, gy);
    path.forEach(([px, py]) => spawnSquare(px, py));

    lastGridX = gx;
    lastGridY = gy;
  });
})();



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