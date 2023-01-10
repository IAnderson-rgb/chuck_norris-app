import React, {PureComponent} from 'react';
import Title from '../components/Title';
import JokePanel from '../components/JokePanel';
import SearchBox from '../components/SearchBox';
import Scroll from	'../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import NewBtn from "../components/NewBtn";
import TwitterBtn from "../components/TwitterBtn";
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

	invokeTwitter = (e) => {};

	componentDidUpdate() {}

	render() {
		const { jokeText } = this.state;
		return !jokeText ? (
			<h1>..Loading</h1>
		) : (
			<div className='tc'>
				<Scroll>
					<header id='header'>
						<Title />
						<JokePanel joke={jokeText} />
						<nav>
							<ul>
								<TwitterBtn />
								<NewBtn clickNewJoke={this.onClicknewJoke} />
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
