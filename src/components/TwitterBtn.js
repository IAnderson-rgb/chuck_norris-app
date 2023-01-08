import React from "react";
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/main.css';
import '../assets/css/noscript.css';

const Twitter = () => {
	
	return (
		<li>
			<a
				id='twitter'
				href='#intro'
				className='twitter-button'
				title='Tweet This!'
			>
				<i className='fab fa-twitter'> </i>
			</a>
		</li>
	);
};

export default Twitter;