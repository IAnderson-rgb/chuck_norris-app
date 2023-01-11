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
			onClick={clickNewJoke}
			>
				New
			</a>
		</li>
	);
}

export default NewBtn;
