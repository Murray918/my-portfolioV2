import React, { Component } from 'react';
import '../styles/components/Projects.css';

export default class Projects extends Component {
	render() {
		return (
			<div id="Projects">
				<h1>Projects</h1>
				<hr />
				<div className="Project-flex-contain">
					<div id="Project" className="row Project-container">
						<div className="Project-img four columns">
							<img src="https://images.unsplash.com/photo-1506287375451-bb850eba44d0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=162af6b1badbe6c88475f5b45186502b&auto=format&fit=crop&w=675&q=80" />
						</div>
						<div className="Project-info six columns u-pull-left">
							<h4 className="column">Project Title</h4>
							<p className="column">
								On the other hand, we denounce with righteous indignation and
								dislike men who are so beguiled and demoralized by the charms of
								pleasure of the moment, so blinded by desire, that they cannot
								foresee the pain and trouble that are bound.
							</p>
						</div>
					</div>
				</div>
				<div className="Project-flex-contain">
					<div id="Project" className="row Project-container">
						<div className="Project-info six columns u-pull-left">
							<h4 className="column">Project Title</h4>
							<p className="column">
								On the other hand, we denounce with righteous indignation and
								dislike men who are so beguiled and demoralized by the charms of
								pleasure of the moment, so blinded by desire, that they cannot
								foresee the pain and trouble that are bound.
							</p>
						</div>
						<div className="Project-reverse-image four columns u-pull-right">
							<img src="https://images.unsplash.com/photo-1506287375451-bb850eba44d0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=162af6b1badbe6c88475f5b45186502b&auto=format&fit=crop&w=675&q=80" />
						</div>
					</div>
				</div>
				<div className="Project-flex-contain">
					<div id="Project" className="row Project-container">
						<div className="Project-img four columns">
							<img src="https://images.unsplash.com/photo-1506287375451-bb850eba44d0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=162af6b1badbe6c88475f5b45186502b&auto=format&fit=crop&w=675&q=80" />
						</div>
						<div className="Project-info six columns u-pull-left">
							<h4 className="column">Project Title</h4>
							<p className="column">
								On the other hand, we denounce with righteous indignation and
								dislike men who are so beguiled and demoralized by the charms of
								pleasure of the moment, so blinded by desire, that they cannot
								foresee the pain and trouble that are bound.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
