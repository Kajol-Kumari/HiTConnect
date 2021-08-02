import { Component } from 'react';
import Header from '../../../template/header/header';
import "./game.css"
export default class Game extends Component {
	render() {
		return (
			<div className="game-container">
				<div className="hitk-tech-comm-cover">
					<Header />
					{/* <p className="hitk-tech-comm-moto" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Not me but you!!</p> */}
				</div>
			</div>
		);
	}
};
