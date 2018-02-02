import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/index.css';
import App from './components/App';
import './styles/normalize.css';
import './styles/skeleton.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
