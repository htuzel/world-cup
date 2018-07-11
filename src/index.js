import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Group from './components/Group';
import registerServiceWorker from './registerServiceWorker';
import uruguayflag from './countries/uy.svg';
import russiaflag from './countries/rs.svg';
import arabiaflag from './countries/sa.svg';
import egyptflag from './countries/et.svg';

var groupATeams = new Array ("Uruguay", "Russia", "Saudi Arabia", "Egypt");
var groupAFlags = new Array (uruguayflag, russiaflag, arabiaflag, egyptflag);
var groupAOverall = new Array (89, 83, 74, 79);

ReactDOM.render(<Group team= {groupATeams} flag={groupAFlags} overall={groupAOverall}/>, document.getElementById('root'));
registerServiceWorker();
