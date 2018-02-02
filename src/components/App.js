import React, { Component } from 'react';
import '../styles/components/App.css';
import Layout from './Layout';
import Contact from './Contact';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<Contact />
				</Layout>
			</div>
		);
	}
}

export default App;
