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
		const urls = [
			'https://api.chucknorris.io/jokes/random',
			'https://api.chucknorris.io/jokes/categories',
			'https://api.chucknorris.io/jokes/search?query=test',
		];

		const getData = async function (event) {
			const data = await Promise.allSettled(
				urls.map(async function (url) {
					const response = await fetch(url);
					const resp = await response.json();
					return resp;
				})
			);

			return data.map(({ value }) => value);
		};

		this.setState({ jokes: await getData() });
	}

	componentDidUpdate() {}
	
	// onSearchChange = (event) => {
	// 	this.setState({ searchfield: event.target.value });
	// };
	
	render() {
		const { jokes, searchfield } = this.state;
		console.log('Looging jokes', jokes );
		const objArray = [];
		jokes.forEach((obj) => {
			let { value } = obj;
			objArray.push(value);
		});
		console.log('Whattt!', objArray);
		return !jokes.length ? (
			<h1>..Loading</h1>
		) : (
			<div className='tc'>
				<Scroll>
					<JokePanel jokes={objArray} />
					<SearchBox searchChange={this.onSearchChange} />
				</Scroll>
			</div>
		);
	}
}

export default App;
