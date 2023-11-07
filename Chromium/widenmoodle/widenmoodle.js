const href = window.location.href;

if (href.includes('://moodle.')) {
    let linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = chrome.runtime.getURL('widenmoodle.css');
    document.head.appendChild(linkElement);
}

let cardDeck = document.querySelector(".card-deck.dashboard-card-deck");

if (href.includes('://moodle.')) {
	if (cardDeck) {
		cardDeck.insertAdjacentHTML('beforeend', `
		<div class="card dashboard-card border-0">
			<div class="card-img-top bg-pulse-grey w-100" style="height: 7rem"></div>
			<div class="card-body pr-1 course-info-container">
				<div class="bg-pulse-grey w-100" style="height: 1rem"></div>
			</div>
		</div>`);
	}
}