import React from "react";


const SearchBox = ({searchChange}) => {
  console.log(searchChange)
  return (
    <div className='pa4'>
    <input 
    className='pa3 br3 ba b--green bg-black-50'
    type='search' 
    placeholder='search'
    onChange={searchChange}
    />
    </div>
  );
}

export default SearchBox;