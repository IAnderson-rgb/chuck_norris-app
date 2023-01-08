import React from "react";
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/main.css';
import '../assets/css/noscript.css';


const JokePanel = () => {
	let apiJoke = [];
	const quoteContainer = document.getElementById('quote-container');
	const JokeText = document.getElementById('quote');
	const twitterBtn = document.getElementById('twitter');
	const newJokeBtn = document.getElementById('new-quote');
	const loader = document.getElementById('loader');
 const voiceList = document.querySelector('#voiceList');
 const btnSpeak = document.querySelector('#btnSpeak');

// function toggleButton() {
// 	button.disabled = !button.disabled;
// }
var tts = window.speechSynthesis;
	var voices =[];

GetVoices();

if (speechSynthesis !== undefined){
	speechSynthesis.onvoiceschanged = GetVoices;
}
	
btnSpeak.addEventListener('click', () => {
	const toSpeak = new speechSynthesis(getJokes())
	const selectedVoiceName = voiceList.selectedOption[0].getAttribute('data-name');
	voices.forEach((voice)=> {
		if (voice.name === selectedVoiceName) {
			toSpeak.voice = voice;
		}
	});
	tts.speak(toSpeak);
});

	function GetVoices() {
		voices = tts.getVoices();
		voiceList.innerHTML = '';
		voices.forEach((voice) => {
			var listItem = document.createElement('option');
			listItem.textContent = voice.name;
			listItem.setAttribute('data-lang', voice.lang);
			listItem.setAttribute('data-lang', voice.name);
			voiceList.appendChild(listItem);
		});
		voiceList.selectedIndex = 0;
	}

	function showLoadingSpinner() {
		if (loader.hidden == null) {
			loader.hidden = false;
			quoteContainer.hidden = true;
		} else {
			loader.hidden = false;
			quoteContainer.hidden = true;
		}
	}

	function hideLoadingSpinner() {
		if (!loader.hidden) {
			loader.hidden = true;
			quoteContainer.hidden = false;
		}
	}

	// Show new quote
	function newJokes(params) {
		showLoadingSpinner();
		console.log('Params', params);
		if (params) {
			JokeText.textContent = params.value;
			hideLoadingSpinner();
		}
	}

	// Get quotes from API
	async function getJokes() {
		showLoadingSpinner();
		let joke = '';
		const apiUrl = 'https://api.chucknorris.io/jokes/random';
		try {
			const response = await fetch(apiUrl);
			apiJoke = await response.json();
			newJokes(apiJoke);
			joke = apiJoke.joke;
			return joke;
		} catch (error) {
			alert(error);
		}
	}

	function tweetJoke() {
		const twitterUrl = `https://twitter.com/intent/tweet?text=${JokeText.textContent}`;
		window.open(twitterUrl, '_blank');
	}

// // button.addEventListener('click', getJokes);
// audioElement.addEventListener('ended', toggleButton);

	if (newJokeBtn) {
		newJokeBtn.addEventListener('click', getJokes);
	}

	if (twitterBtn) {
		twitterBtn.addEventListener('click', tweetJoke);
	}

	// On load
	getJokes();

	return (
		<header id='header'>
			<div className='logo quote-container'>
				<span className='icon p2'>
					Brain<i className='top-pa4 fa fa-brain'>{` Extract`}</i>
				</span>
			</div>
			<div className='logo'>
				<span className='icon'>
					<i className='fas fa-hat-cowboy'></i>
				</span>
			</div>
			<div className='content'>
				<div className='quote-text inner'>
					<h1 id='quote-container'>
						<span id='quote'></span>
					</h1>
					<div className='loader' id='loader'></div>
					<p>{/* place category vule here */}</p>
				</div>
			</div>
			<nav>
				<ul>
					<li>
						<a
							id='twitter'
							href='#intro'
							className='twitter-button'
							title='Tweet This!'
						>
							<i className='fab fa-twitter'> </i>
						</a>
					</li>
					<li>
						<a id='new-quote btnSpeak' href='#update'>
							New
						</a>
						<div>
							Select Voice: <select name='' id='voiceList'></select>
						</div>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default JokePanel;