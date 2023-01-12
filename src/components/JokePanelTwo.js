import React from "react";
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/main.css';
import '../assets/css/noscript.css';



const JokePanelTwo = (props) => {
	
	return (
		<header id='header'>
			<div className='content'>
				<div className='quote-text inner'>
					<h1 className="anim-typewriter" id='jokePanelTwo'>{props.joke}</h1>
					<p>{/* place category vule here */}</p>
				</div>
			</div>
		</header>
	);
}

export default JokePanelTwo;