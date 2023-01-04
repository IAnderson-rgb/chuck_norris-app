import React, {Component} from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			jokes: [],
			searchfield: '',
		};
	}

	componentDidMount() {
		const urls = [
			'https://api.chucknorris.io/jokes/random',
			'https://api.chucknorris.io/jokes/categories',
			'https://api.chucknorris.io/jokes/search?query=',
		];

		const getData = async function () {
			const [random, categories, search] = await Promise.allSettled(
				urls.map(async function (url) {
					const resp = await fetch(url);
					return resp.json();
				})
			);
			console.log('random', random);
			console.log('categories', categories);
			console.log('search', search);
		};
	}

  render() {
    const {jokes, searchfield } = this.state;
  
   return !jokes.length ? (
    <h1>..Loading</h1>
   ) : (
    <div className='tc'>
      <h1>Hi</h1>
      {/* <Joke /> */}
    </div>
   )
  }

}

export default App;
