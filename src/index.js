import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Team from './components/Team';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Team team="Brazil"/>, document.getElementById('root'));
registerServiceWorker();
