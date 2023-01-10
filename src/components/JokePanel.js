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
	const speakBtn = document.getElementById('btn-speak');
	let jokeText = '';

	// On load
	getJokes();
	// Get jokes from API
	async function getJokes() {
		showLoadingSpinner();
		let joke = '';
		const apiUrl = 'https://api.chucknorris.io/jokes/random';
		try {
			const response = await fetch(apiUrl);
			apiJoke = await response.json();
			joke = await newJokes(apiJoke);
			jokeText = joke;
			tellJoke(jokeText);
		} catch (error) {
			alert(error);
		}
	}

	// Voice //
	const synth = window.speechSynthesis;

	const voiceSelect = document.querySelector('select');

	let voices = [];

	function populateVoiceList() {
		voices = synth.getVoices();

		for (let i = 0; i < voices.length; i++) {
			const option = document.createElement('option');
			option.textContent = `${voices[i].name} (${voices[i].lang})`;
			option.setAttribute('data-lang', voices[i].lang);
			option.setAttribute('data-name', voices[i].name);
			voiceSelect.appendChild(option);
		}
	}

	populateVoiceList();
	if (speechSynthesis.onvoiceschanged !== undefined) {
		speechSynthesis.onvoiceschanged = populateVoiceList;
	}

	function tellJoke(params) {
		console.log('Joke:', jokeText);
		const utterThis = new SpeechSynthesisUtterance('Joke goes here');
		const selectedOption =
			voiceSelect.selectedOptions[0].getAttribute('data-name');
		for (let i = 0; i < voices.length; i++) {
			if (voices[i].name === selectedOption) {
				utterThis.voice = voices[i];
			}
		}
		synth.speak(utterThis);
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
		if (params) {
			JokeText.textContent = params.value;
			hideLoadingSpinner();
		}
	}

	function tweetJoke() {
		const twitterUrl = `https://twitter.com/intent/tweet?text=${JokeText.textContent}`;
		window.open(twitterUrl, '_blank');
	}

	if (speakBtn) {
		speakBtn.onclick = (event) => {
			tellJoke(jokeText);
		}
	}
	

	if (newJokeBtn) {
		newJokeBtn.addEventListener('click', getJokes);
	}

	if (twitterBtn) {
		twitterBtn.addEventListener('click', tweetJoke);
	}

	return (
		<header id='header'>
			<div className='logo quote-container'>
				<span className='icon p2'>
					Brain<i className='top-pa4 fa fa-brain'>{` Extract`}</i>
				</span>
			</div>
			<div className='logo'>
				<span className='icon'>
					<a href='#speak' id='btn-speak'>
						<i className='fas fa-hat-cowboy grow'></i>
					</a>
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
					<li id='new-quote'>
						<a href='#update'>New</a>
					</li>
					<li>
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