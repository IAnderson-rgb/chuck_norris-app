import React from "react";
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/main.css';
import '../assets/css/noscript.css';
import NewBtn from "./NewBtn";
import TwitterBtn from "./TwitterBtn";

const Nav = () => {

  return (
		<nav>
			<ul>
				<TwitterBtn />
				<NewBtn />
			</ul>
		</nav>
	);
}

export default Nav;