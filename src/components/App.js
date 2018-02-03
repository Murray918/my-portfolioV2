import React, { Component } from 'react';
import '../styles/components/App.css';
import Layout from './Layout';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<Contact />
					<About />
					<Projects />
				</Layout>
			</div>
		);
	}
}

export default App;
