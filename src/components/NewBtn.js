import React from "react";
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/main.css';
import '../assets/css/noscript.css';


function NewBtn ({clickNewJoke}) {
	
  return (
		<li >
			<a 
			id='new-quote' 
			href='#update'
			title='Click for a new joke!' 
			onClick={clickNewJoke}
			>
				New
			</a>
		</li>
	);
}

export default NewBtn;
