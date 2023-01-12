import React from "react";
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/main.css';
import '../assets/css/noscript.css';


const SearchBox = ({searchChange}) => {
 
  return (
		<div className='ma4 tooltip'>
			<input
				className='pa2 br3 ba b--green bg-black-50'
				type='search'
				placeholder='search'
				onChange={searchChange}
			/>
			<span className='top'>
				Sorry! Search is still under constructin!
			</span>
			<i className='pa2 fas fa-hard-hat'></i>
		</div>
	);
}

export default SearchBox;