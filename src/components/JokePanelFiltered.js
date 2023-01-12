import React from "react";
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/main.css';
import '../assets/css/noscript.css';
import Scroll from "./Scroll";
import Title from "./Title";
import TwitterBtn from "./TwitterBtn";
import SearchBox from "./SearchBox";


const JokePanelFiltered = ({reload}) => {

	return (
		<Scroll>
			<header id='header'>
				<Title />
				<header id='header'>
					<div className='content'>
						<div className='quote-text inner'>
							<h1 className='anim-typewriter'>#@%*!</h1>
							<p>
								Sorry, this joke may contain inappropriate language for minors.
							</p>
						</div>
					</div>
				</header>
				<nav>
					<ul>
						<TwitterBtn />
						<li>
							<a id='new-quote' href='#update' onClick={reload}>
								New
							</a>
						</li>
						<li>
							<div>
								Select Voice: <select name='' id='voiceList'></select>
							</div>
						</li>
					</ul>
				</nav>
			</header>
			<SearchBox />
		</Scroll>
	);
}

export default JokePanelFiltered;