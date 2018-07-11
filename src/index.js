import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Team from './components/Team';
import registerServiceWorker from './registerServiceWorker';
import brazilflag from './countries/br.svg';

ReactDOM.render(<Team team="Brazil" flag={brazilflag} overall="89"/>, document.getElementById('root'));
registerServiceWorker();
