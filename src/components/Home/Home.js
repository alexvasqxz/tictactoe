import React from 'react';

import Menu from '../menu/Menu';
import TicTacToe from '../tictactoe/TicTacToe';

class Home extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu /> 
 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
		  	  		
		  	        <TicTacToe /> 
 
		  	        <hr className="featurette-divider" />
 
		            </div>
 
	  		</main>
 
	  		{/* <Footer /> */}
 
	  		</>
 
		)
 
	}
 
}

export default Home;