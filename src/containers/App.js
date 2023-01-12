import React, {PureComponent} from 'react';
import Title from '../components/Title';
import JokePanelTwo from '../components/JokePanelTwo';
import JokePanelOne from '../components/JokePanelOne'
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

	onClicknewJoke = (e) => {
		audio.play();
		var el = document.getElementById('jokePanelTwo');
		el.style.animation = 'none';
		el.focus(); /* trigger reflow */
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

	onClickReload = (e) => {
		console.log('I was clicked');
		audio.play();
		vessel = 0;
		window.location.reload();
	};

	componentDidUpdate() {}

	// onSearchChange = (event) => {
	// 	this.setState({ searchfield: event.target.value });
	// };

	render() {
		const { jokeText } = this.state;
		let arr = censor;
		function contains(target, pattern) {
			pattern.forEach(function (word) {
				vessel = vessel + target.includes(word);
			});
			return vessel === 1;
		}
		if (contains(jokeText.toLowerCase(), arr) === true) {
			audioBleep.play();
			console.log('working!');
			return (
				<div className='tc'>
					<JokePanelOne reload={this.onClickReload} />
				</div>
			);
		} else {
			return !jokeText ? (
				<h1>..Loading</h1>
			) : (
				<div className='tc'>
					<Scroll>
						<header id='header'>
							<Title />
							<RunVoice joke={jokeText} />
							<ErrorBoundary>
								<JokePanelTwo joke={jokeText} />
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
