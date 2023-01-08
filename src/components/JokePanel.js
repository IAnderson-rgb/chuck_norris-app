import React from "react";
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/main.css';
import '../assets/css/noscript.css';
import Nav from "./Nav";


const JokePanel = ({jokes}) => {
	const jokeString = jokes.value;
	return (
		<header id='header'>
			<div className='logo'>
				<span className='icon'>
					<i className='fas fa-hat-cowboy'></i>
				</span>
			</div>
			<div className='content'>
				<div className='quote-text inner'>
					<h1>{jokeString}</h1>
					<p>{/* place category vule here */}</p>
				</div>
			</div>
			<Nav />
		</header>
	);
}

export default JokePanel;