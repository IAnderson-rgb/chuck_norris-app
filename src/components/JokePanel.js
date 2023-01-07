import React from "react";
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/main.css';
import '../assets/css/noscript.css';


const JokePanel = (jokes) => {
	const randomJoke = jokes;
	const currentJoke = randomJoke.jokes[0];

	return (
		<header id='header'>
			<div className='logo quote-container' id='quote-container'>
				<span className='icon'>
				Brain<i className='fa fa-brain'>{` Extract`}</i>
				</span>
			</div>
			<div className='content'>
				<div className='quote-text inner'>
					<h1 id='quote'>{currentJoke}</h1>
					<p>{/* place category vule here */}</p>
					<div className="loader" id="loader"></div>
				</div>
			</div>
			<nav>
				<ul>
					<li>
						<a href='#intro' className='twitter-button' id='twitter' title="Tweet This!">
							<span className='icon'>
								<i className='fab fa-twitter'></i>
							</span>
						</a>
					</li>
					<li id='new-quote'>
						<a href='#update'>New Joke</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default JokePanel;