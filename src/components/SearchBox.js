import React from "react";


const SearchBox = ({searchChange}) => {
  console.log(searchChange)
  return (
		<div className=' ma4 tooltip'>
			<input
				className='pa2 br3 ba b--green bg-black-50'
				type='search'
				placeholder='search'
				onChange={searchChange}
			/>
			<span className='tooltiptext'>Sorry! Search is still under constructin! <i class='fas fa-hard-hat'></i></span>
		</div>
	);
}

export default SearchBox;