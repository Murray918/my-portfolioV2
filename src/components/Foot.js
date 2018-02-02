import React, { Component } from 'react';
import '../styles/components/Foot.css';

export default class Foot extends Component {
	render() {
		return (
			<div id="Foot">
				<footer className="Foot-footer">
					<div className="container">
						<h6 className="Foot-content">Andrew Murray Full Stack Engineer</h6>
						<h6 className="Foot-content">Austin TX</h6>
						<h6 className="Foot-content">2018</h6>
					</div>
				</footer>
			</div>
		);
	}
}
