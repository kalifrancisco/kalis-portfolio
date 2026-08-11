// site-footer.js

class SiteFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<div class="foot-wrap">
				<div class="footer-flex">
					<div class="update-div">
						<p class="rights">Kali Francisco © 2026</p>
						<div class="top-button">
							<p>⇈</p>
						</div>
					</div>
					<div class="footer-links-row-wrap">
						<a href="https://www.are.na/kali-francisco/channels" target="_blank">are.na</a>
						<a href="mailto:kalf@umich.edu">kalf@umich.edu</a>
						<a href="https://www.github.com/kalifrancisco" target="_blank">Github</a>
						<a href="https://www.instagram.com/chicanekali/" target="_blank">Instagram</a>
						<a href="https://www.linkedin.com/in/kalifrancisco/" target="_blank">LinkedIn</a>
						<a href="docs/Kali_Francisco_TwoCol_Resume.pdf" target="_blank">Resume</a>
						<a href="https://x.com/kaliiiiif" target="_blank">X</a>
					</div>
				</div>
			</div>
		`;
	}
}

customElements.define('site-footer', SiteFooter);