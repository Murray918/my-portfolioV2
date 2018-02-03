import React, { Component } from 'react';
import '../styles/components/App.css';
import Layout from './Layout';
import Contact from './Contact';
import About from './About';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<Contact />
					<About />
				</Layout>
			</div>
		);
	}
}

export default App;
