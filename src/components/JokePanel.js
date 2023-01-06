import React from "react";
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/main.css';
import '../assets/css/noscript.css';


const JokePanel = (jokes) => {
	console.log('JokePanel', jokes);
	const randomJoke = jokes;
	// const { categories, value } = jokes;

	function getJoke(params) {
		let newJoke = '';
		if (params === randomJoke.jokes) {
			const currentJoke = randomJoke.jokes[0];
			console.log('Log 1', currentJoke);
			return currentJoke;
		} else {
			newJoke = params;
		}
		console.log('Log 2', newJoke);
		return newJoke;
	}

	async function fetchUsers() {
		const resp = await fetch('https://api.chucknorris.io/jokes/random');
		const data = await resp.json();
		const jokeData = data.value;
		console.log('You Clicked Reload', jokeData);
		const updatedJoke = jokeData;
		return getJoke(updatedJoke);
		// return currentJoke
	}

	function addNewJokeAfterClick(e) {
		if (e) {
			fetchUsers();
		}
	}

	return (
		<header id='header'>
			<div className='logo'>
				<span className='icon'>
					<i className='fas fa-hat-cowboy'></i>
				</span>
			</div>
			<div className='content'>
				<div id='display' className='inner'>
					<h1>{getJoke(randomJoke.jokes)}</h1>
					<p>
						A fully responsive site template designed by{' '}
						<a href='https://html5up.net'>HTML5 UP</a> and released
						<br />
						for free under the{' '}
						<a href='https://html5up.net/license'>Creative Commons</a> license.
					</p>
				</div>
			</div>
			<nav>
				<ul>
					<li>
						<a href='#intro'>Intro</a>
					</li>
					<li>
						<a href='#work'>Work</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#update' onClick={addNewJokeAfterClick}>
							Update
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default JokePanel;