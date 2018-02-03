import React, { Component } from 'react';
import Foot from './Foot';
import Nav from './Nav';

export default class Layout extends Component {
	render() {
		return (
			<div id="Layout">
				<Nav />
				<div className="container site-container">{this.props.children}</div>
				<Foot />
			</div>
		);
	}
}
