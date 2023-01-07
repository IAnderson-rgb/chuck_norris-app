import React from "react";
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/main.css';
import '../assets/css/noscript.css';


const JokePanel = () => {
	let apiJoke = [];
	const quoteContainer = document.getElementById('quote-container');
	const quoteText = document.getElementById('quote');
	const twitterBtn = document.getElementById('twitter');
	const newQuoteBtn = document.getElementById('new-quote');
	const loader = document.getElementById('loader');

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
	function newQuote(params) {
		showLoadingSpinner();
		console.log('Params', params);
		if (params) {
			quoteText.textContent = params.value;
			hideLoadingSpinner();
		}
	}

	// Get quotes from API
	async function getQuotes() {
		showLoadingSpinner();
		const apiUrl = 'https://api.chucknorris.io/jokes/random';
		try {
			const response = await fetch(apiUrl);
			apiJoke = await response.json();
			newQuote(apiJoke);
		} catch (error) {
			alert(error);
		}
	}

	function tweetQuote() {
		const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}`;
		window.open(twitterUrl, '_blank');
	}

	if (newQuoteBtn) {
		newQuoteBtn.addEventListener('click', getQuotes);
	}

	if (twitterBtn) {
		twitterBtn.addEventListener('click', tweetQuote);
	}

	// On load
	getQuotes();

	return (
		<header id='header'>
			<div className='logo quote-container'>
				<span className='icon p2'>
					Brain<i className='top-pa4 fa fa-brain'>{` Extract`}</i>
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
						<a id='new-quote' href='#update'>
							New
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default JokePanel;