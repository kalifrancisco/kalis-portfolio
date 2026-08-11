document.addEventListener('DOMContentLoaded', function () {
	const mount = document.getElementById('info-dropdown-mount');
	if (!mount) return;

	mount.innerHTML = `
        <div id="info-dropdown" class="info-dropdown" aria-hidden="true">
            <div class="info-dropdown-inner">

                <!-- Col 1 -->
                <div class="info-col">
                    <div class="col-section">
                         <h2 class="dropdown-headline">About Me</h2>
                        <p class="dropdown-body">Hi, I'm Kali! As a designer, I specialize in elevating brands and teams by unraveling complex business challenges into measurable results and memorable web experiences.<br><br>My computer science background drives the precision in my design work and encourages me to be a critical problem solver whilst pushing creative boundaries. I care deeply about the metacognitive process of abstraction and how it helps coherently stitch together systems, concepts, and ideas into designs. This curiosity is at the forefront of my love for design, engineering, and research.<br><br>Outside work, find me hiking or biking, conducting aesthetic & typographic research, or producing music!</p>
                    </div>
                    <div class="col-section">
                        <div class="info-col">
                            <div class="dropdown-photo">
                                <img src="images/kali-2026.png" alt="Me at Dodgers Stadium">
                            </div>
                            <div class="info-hover">
                                <img src="images/hover-headphones.png" alt="headphones">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Col 2 -->
                <div class="info-col">
                    <div class="col-section">
                        <h2 class="dropdown-headline">Experience</h2>
                        <div class="dropdown-link-list">
                            <div class="dropdown-row"><span>Associate UX Designer</span><span class="info-date">jan '25 - present</span></div>
                            <p class="dropdown-subtext">NeuraFlash, part of Accenture</p>
                        </div>

                        <div class="dropdown-link-list">
                            <div class="dropdown-row"><span>UX Design Intern</span><span class="info-date">may '24 - dec '25</span></div>
                            <p class="dropdown-subtext">NeuraFlash, part of Accenture</p>
                        </div>

                        <div class="dropdown-link-list">
                            <div class="dropdown-row"><span>UX Designer (contract)</span><span class="info-date">aug '24 - dec '24</span></div>
                            <p class="dropdown-subtext">Collage</p>
                        </div>

                        <div class="dropdown-link-list">
                            <div class="dropdown-row"><span>UX Designer (founding team)</span><span class="info-date">may '23 - dec '24</span></div>
                            <p class="dropdown-subtext">Bubble Learn Science</p>
                        </div>
                    </div>
                    <div class="col-section">
                        <div class="dropdown-link-list">
                            <div class="dropdown-row">
                                <span>University of Michigan</span>
                                <span class="info-date">aug '21 - may '25</span>
                            </div>
                            <p class="dropdown-subtext">B.S in Computer Science<br>User Experience Design Minor</p>
                        </div>
                    </div>
                </div>

                <div class="col-section">
                    <h2 class="dropdown-headline">Bookmarks</h2>
                    <div class="dropdown-wrap">
                        <h3 class="dropdown-subheadline">design</h3>
                        <div class="dropdown-link-list list-b">
                            <a href="https://yigit.world" target="_blank" class="dropdown-subtext">yigit.world</a>
                            <a href="https://www.pentagram.com/work/poetry-magazine" target="_blank" class="dropdown-subtext">Pentagram for Poetry Magazine</a>
                            <a href="https://typotheque.le75.be/" target="_blank" class="dropdown-subtext">Typothèque Esa le 75</a>
                        </div>
                    </div>
                    <div class="col-section">
                        <div class="dropdown-wrap">
                            <h3 class="dropdown-subheadline">research</h3>
                            <div class="dropdown-link-list list-b">
                                <a href="https://fontsinuse.com/in/2/formats/72/album-art" target="_blank" class="dropdown-subtext">fontsinuse.com</a>
                                <a href="https://cari.institute/" target="_blank" class="dropdown-subtext">cari.institute</a>
                                <a href="https://aesthetic-programming.net/" target="_blank" class="dropdown-subtext">aesthetic-programming.net</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Col 3 -->
                <div class="info-col">
                    <div class="col-section">
                        <div class="dropdown-link-list">
                            <a href="https://www.are.na/kali-francisco/channels" target="_blank" class="dropdown-subtext">are.na</a>
                            <a href="mailto:kalf@umich.edu" class="dropdown-subtext">Email</a>
                            <a href="https://www.github.com/kalifrancisco" target="_blank" class="dropdown-subtext">Github</a>
                            <a href="https://www.instagram.com/chicanekali/" target="_blank" class="dropdown-subtext">Instagram</a>
                            <a href="https://www.linkedin.com/in/kalifrancisco/" target="_blank" class="dropdown-subtext">LinkedIn</a>
                            <a href="docs/Kali_Francisco_TwoCol_Resume.pdf" target="_blank" class="dropdown-subtext">Resume</a>
                            <a href="https://x.com/kaliiiiif" target="_blank" class="dropdown-subtext">X</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	`;

	const infoToggle = document.getElementById('info-toggle');
	const infoDropdown = document.getElementById('info-dropdown');
    const navTitleText = document.querySelector('.nav-title-wrap p');
	if (!infoToggle || !infoDropdown) return;

	infoToggle.addEventListener('click', function (e) {
		e.preventDefault();
		const isOpen = infoDropdown.classList.toggle('open');
		infoToggle.setAttribute('aria-expanded', isOpen);
		infoDropdown.setAttribute('aria-hidden', !isOpen);
        infoToggle.classList.toggle('current', isOpen); 
		if (navTitleText) navTitleText.style.opacity = isOpen ? 0 : 1;
	});

	document.addEventListener('click', function (e) {
		if (
			infoDropdown.classList.contains('open') &&
			!infoDropdown.contains(e.target) &&
			e.target !== infoToggle
		) {
			infoDropdown.classList.remove('open');
			infoToggle.setAttribute('aria-expanded', false);
			infoDropdown.setAttribute('aria-hidden', true);
            infoToggle.classList.remove('current');
            if (navTitleText) navTitleText.style.opacity = 1;
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && infoDropdown.classList.contains('open')) {
			infoDropdown.classList.remove('open');
			infoToggle.setAttribute('aria-expanded', false);
			infoDropdown.setAttribute('aria-hidden', true);
            infoToggle.classList.remove('current');
            if (navTitleText) navTitleText.style.opacity = 1;
		}
	});
    
});