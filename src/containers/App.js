import React, {Component} from 'react';
import JokePanel from '../components/JokePanel';
import SearchBox from '../components/SearchBox';
import Scroll from	'../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';


class App extends Component {
	constructor() {
		super();
		this.state = {
			jokes: [],
			searchfield: '',
		};
	}

	async componentDidMount() {
		// const urls = [
		// 	'https://api.chucknorris.io/jokes/random',
		// 	'https://api.chucknorris.io/jokes/categories',
		// 	'https://api.chucknorris.io/jokes/search?query=test',
		// ];

		// const getData = async function (event) {
		// 	const data = await Promise.allSettled(
		// 		urls.map(async function (url) {
		// 			const response = await fetch(url);
		// 			const resp = await response.json();
		// 			return resp;
		// 		})
		// 	);

		// 	return data.map(({ value }) => value);
		// };

		this.setState({});
	}

	componentDidUpdate() {}

	// onSearchChange = (event) => {
	// 	this.setState({ searchfield: event.target.value });
	// };

	render() {
		return (
			<div className='tc'>
				<Scroll>
					<ErrorBoundary>
						<JokePanel />
					</ErrorBoundary>
					<SearchBox searchChange={this.onSearchChange} />
				</Scroll>
			</div>
		);
	}
}

export default App;
