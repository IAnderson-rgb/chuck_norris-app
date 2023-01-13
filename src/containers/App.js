import React, {PureComponent} from 'react';
import Title from '../components/Title';
import JokePanel from '../components/JokePanel';
import JokePanelFiltered from '../components/JokePanelFiltered'
import SearchBox from '../components/SearchBox';
import Scroll from	'../components/Scroll';
import {censor} from '../assets/censor';
import ErrorBoundary from '../components/ErrorBoundary';
import NewBtn from '../components/NewBtn';
import TwitterBtn from '../components/TwitterBtn';
import RunVoice from '../components/RunVoice';
import './App.css';


const apiUrl = 'https://api.chucknorris.io/jokes/random';
const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
const audioBleep = new Audio('https://www.fesliyanstudios.com/play-mp3/5444');
let vessel = 0;

class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			jokeText: '',
			searchfield: '',
		};
	}

	componentDidMount() {
		try {
			fetch(apiUrl)
				.then((resp) => resp.json())
				.then((apiJoke) => this.setState({ jokeText: apiJoke.value }));
		} catch (error) {
			console.log('Oooops, that is not good', error);
		}
	}
// Issue: animation stopped working after pageload. Solution: I created a way to trigger reflow on each click event. 
//This is an expensive solution and may cause blockage to the user. A better solution would need to be implemented if scaled. IA
	onClicknewJoke = (e) => {
		audio.play();
		let el = document.getElementById('jokePanel');
		el.style.animation = 'none';
		el.getClientRects(); /* trigger reflow */
		el.style.animation = null; 
		e.stopPropagation();
		try {
			fetch(apiUrl)
				.then((resp) => resp.json())
				.then((apiJoke) => this.setState({ jokeText: apiJoke.value }));
		} catch (error) {
			console.log('Oooops, that is not good', error);
		}
	};

	invokeTwitter = (e) => {
		audio.play();
		const twitterUrl = `https://twitter.com/intent/tweet?text=${this.state.jokeText}`;
		window.open(twitterUrl, '_blank');
	};
//Issue: Could not return to the JokePanel once JokesPanelFiltered view was rendered. Solution: I added window.location.reload() to rerender the JokePanel with a new joke.
//This is also expensive and would need to implement a better solution if scaled. IA
	onClickReload = (e) => {
		console.log('I was clicked');
		audio.play();
		vessel = 0;
		window.location.reload();
		e.stopPropagation();
	};

	componentDidUpdate() {}

	// onSearchChange = (event) => {
	// 	this.setState({ searchfield: event.target.value });
	// };

	render() {
		const { jokeText } = this.state;
		let arr = censor;// Contains profanity.
		//Issue: Jokes contain language that may be unsuitable for children. Solution: Created a filter.
		//This is potentially expensive solution because the loop continues after a filtered word has been found and handled. A better algorithm or a single call to an API, with the string, would be better bfore scaling. IA 
		function contains(target, pattern) {
			pattern.forEach(function (word) {
				vessel = vessel + target.includes(word);
			});
			return vessel === 1;
		}
		// Filter //
		if (contains(jokeText.toLowerCase(), arr) === true) {
			audioBleep.play();
			console.log('working!');
			return (
				<div className='tc'>
					<JokePanelFiltered reload={this.onClickReload} />
				</div>
			);
		} else {
			return (
				<div className='tc'>
					<Scroll>
						<header id='header'>
							<Title />
							<RunVoice joke={jokeText} />
							<ErrorBoundary>
								<JokePanel joke={jokeText} />
							</ErrorBoundary>
							<nav>
								<ul>
									<TwitterBtn tweetJoke={this.invokeTwitter} />
									<NewBtn clickNewJoke={this.onClicknewJoke} />
									<li>
										<div>
											Select Voice: <select name='' id='voiceList'></select>
										</div>
									</li>
								</ul>
							</nav>
						</header>
						<SearchBox searchChange={this.onSearchChange} />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;
