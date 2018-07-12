import React from 'react';
import ReactDOM from 'react-dom';
import Tournament from './components/tournament';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'bootstrap';
import 'jquery';
import 'popper.js';




ReactDOM.render(<Tournament/>, document.getElementById('root'));
registerServiceWorker();
