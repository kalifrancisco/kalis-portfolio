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
        audioImg2.src = "images/pause-forest.png"; 
    }
    playingF = !playingF;
}

// jump to work event:
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".left-col-proj-index-wrap");
  const projects = document.querySelectorAll(".project-wrap");

  // reset ALL projects
  projects.forEach(proj => proj.classList.remove("active"));

  const defaultProject = document.querySelector('.project-wrap[data-id="neuraflash"]');
  if (defaultProject) defaultProject.classList.add("active");

  const defaultLink = document.querySelector('.left-col-proj-index-wrap[data-target="neuraflash"]');
  if (defaultLink) {
    const h3 = defaultLink.querySelector("h3");
    const p = defaultLink.querySelector("p");
    if (h3) h3.classList.add("active");
    if (p) p.classList.add("active");
  }

  links.forEach(link => {
    link.addEventListener("click", () => {
      const target = link.getAttribute("data-target");
      if (!target) return;

      projects.forEach(proj => {
        proj.classList.remove("active");
        if (proj.getAttribute("data-id") === target) {
          proj.classList.add("active");
          proj.style.pointerEvents = 'auto';
        }
      });

      links.forEach(l => {
        const h3 = l.querySelector("h3");
        const p = l.querySelector("p");
        if (h3) h3.classList.remove("active");
        if (p) p.classList.remove("active");
      });

      const clickedH3 = link.querySelector("h3");
      const clickedP = link.querySelector("p");
      if (clickedH3) clickedH3.classList.add("active");
      if (clickedP) clickedP.classList.add("active");

      if (target === "neuraflash") {
        const nf = document.querySelector('.project-wrap[data-id="neuraflash"]');
        if (nf) {
          nf.style.opacity = '1';
          nf.style.transform = 'translateY(0)';
        }
      }
    });
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

  const formattedDate = `${month} ${day} / ${year}`;

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
      document.body.style.backgroundColor = '#171818'; 
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

// jump to project:
document.querySelectorAll('.password-wrap a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// index event:
document.addEventListener("DOMContentLoaded", () => {
  const infoWrap = document.querySelector(".info-wrap");
  const link = infoWrap.querySelector("a");
  const img = infoWrap.querySelector(".info-pic");
  const currentPage = window.location.pathname.split("/").pop();

  //  curr logic:
  if (currentPage === "about.html") {
    link.classList.add("current");
    img.style.opacity = "1";
  }

  infoWrap.addEventListener("mouseenter", () => { //hover logic
    link.style.color = "#2C2E2E";
    img.style.opacity = "1";
    link.style.fontFamily = "Helvetica Now Text Medium";
  });

  infoWrap.addEventListener("mouseleave", () => {
    if (!link.classList.contains("current")) {
      link.style.color = "";
      img.style.opacity = "0.7";
      link.style.fontFamily = "Helvetica Now Text Regular";
    }
  });

  img.addEventListener("click", () => {
    window.location.href = link.href;
  });
});
