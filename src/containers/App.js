import React, {PureComponent} from 'react';
import Title from '../components/Title';
import JokePanel from '../components/JokePanel';
import SearchBox from '../components/SearchBox';
import Scroll from	'../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import NewBtn from '../components/NewBtn';
import TwitterBtn from '../components/TwitterBtn';
import RunVoice from '../components/RunVoice';
import './App.css';


const apiUrl = 'https://api.chucknorris.io/jokes/random';

class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			jokeText: '',
			searchfield: '',
		};
	}

	componentDidMount() {
		console.log('componentDidMount');
		try {
			fetch(apiUrl)
				.then((resp) => resp.json())
				.then((apiJoke) => this.setState({ jokeText: apiJoke.value }));
		} catch (error) {
			console.log('Oooops, that is not good', error);
		}
	}

	onClicknewJoke = (e) => {
		try {
			fetch(apiUrl)
				.then((resp) => resp.json())
				.then((apiJoke) => this.setState({ jokeText: apiJoke.value }));
		} catch (error) {
			console.log('Oooops, that is not good', error);
		}
	};

	invokeTwitter = (e) => {
		const twitterUrl = `https://twitter.com/intent/tweet?text=${this.state.jokeText}`;
		window.open(twitterUrl, '_blank');
	};

	// componentDidUpdate() {}

	render() {
		const { jokeText } = this.state;
		console.log('render', this.state);
		return !jokeText ? (
			<h1>..Loading</h1>
		) : (
			<div className='tc'>
				<Scroll>
					<header id='header'>
						<Title />
						<RunVoice joke={jokeText} />
						<JokePanel joke={jokeText} />
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

export default App;
