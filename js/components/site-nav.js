// site-nav.js

class SiteNav extends HTMLElement {
	connectedCallback() {
		this.ensureStylesheet('css/info.css');

		this.innerHTML = `
			<nav class="navfixed">
				<div class="nav-title-wrap">
					<a href="index.html"><img src="images/green-gradient-square.png"></a>
					<p>Kali is a Los Angeles based Design Engineer;<br>Creating experiences for Apple, Taco Bell, Vans, etc @ Neuraflash (Accenture)</p>
				</div>
				<div class="nav_links_icons_wrap">
					<ul class="nav_links">
						<li class="navitem"><a href="play.html">Play</a></li>
						<li class="navitem"><a href="about.html" id="info-toggle" aria-expanded="false" aria-controls="info-dropdown">Info+</a></li>
						<li class="navitem"><a href="mailto:kalf@umich.edu">kalf@umich.edu</a></li>
					</ul>
				</div>
			</nav>
			<div id="info-dropdown-mount"></div>
		`;

		this.highlightCurrentPage();
	}

	ensureStylesheet(href) {
		const alreadyLoaded = Array.from(document.styleSheets)
			.some(sheet => sheet.href && sheet.href.includes(href));

		if (alreadyLoaded) return;

		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = href;
		document.head.appendChild(link);
	}

	highlightCurrentPage() {
		// check curr page
		const currentFile = window.location.pathname.split('/').pop() || 'index.html';

		this.querySelectorAll('.nav_links a[href]').forEach(link => {
			const href = link.getAttribute('href');

			if (!href || href.startsWith('mailto:') || href.startsWith('http') || href.startsWith('#')) {
				return;
			}

			if (href === currentFile) {
				const navItem = link.closest('.navitem');
				if (navItem) navItem.classList.add('current');

				link.setAttribute('aria-current', 'page');
			}
		});
	}
}

customElements.define('site-nav', SiteNav);