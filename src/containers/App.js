import React, {Component} from 'react';
import Title from '../components/Title';
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

	  componentDidMount() {
		try {
			fetch('https://api.chucknorris.io/jokes/random')
			.then((response) => response.json())
			.then((jokes) => this.setState({ jokes: jokes }));
			
		} catch (error) {
			alert(error);
		}
		
	}

onClick = (event) => {
	this.setState({jokes: this.componentDidMount})
}

	componentDidUpdate() {}

	render() {
		const { jokes, searchfield } = this.state;
		return !jokes ? (
			<h1>..Loading</h1>
		) : (
			<div className='tc'>
				<Scroll>
					<header id='header'>
						<Title />
						<JokePanel jokes={jokes}/>
					</header>
					<SearchBox searchChange={this.onSearchChange} />
				</Scroll>
			</div>
		);
	}
}



export default App;
