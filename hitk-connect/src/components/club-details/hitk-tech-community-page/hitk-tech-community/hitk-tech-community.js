import { Component } from 'react';
import "./hitk-tech-community.css";
import Header from '../../../template/header/header';
export default class HitkTechCommunity extends Component {
	render() {
		return (
			<div className="hitk-tech-comm-container">
				<div className="hitk-tech-comm-cover">
					<Header />
					<p className="hitk-tech-comm-moto" >For Students, By Students!</p>
				</div>
			</div>
		);
	}
};
