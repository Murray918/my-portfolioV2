import React, { Component } from 'react';
import '../styles/components/Contact.css';

export default class About extends Component {
	render() {
		return (
			<div id="Contact">
				<h1>Contact Me</h1>
				<hr />
				<h6>
					GitHub :
					<a href="https://github.com/Murray918">github.com/Murray918</a>
				</h6>
				<h6>
					{' '}
					Email :
					<a href="mailto:kamurray1@mac.com.com?Subject=Hello%20again">Email</a>
				</h6>
				<h6>
					LinkedIn :
					<a href="https://www.linkedin.com/in/murray918/">LinkedIn</a>
				</h6>
				<h6>
					<a href="https://drive.google.com/file/d/1ZRWMO0uYaYDgBwi_1tnBHmT8XTcyNIw0/view?usp=sharingf">
						Download My Resumé
					</a>
				</h6>
			</div>
		);
	}
}
