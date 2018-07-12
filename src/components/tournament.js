import React, { Component } from 'react';
import Group from './Group';
import './tournament.css';
import ScoreTable from './ScoreTable';

import uruguayflag from '../countries/uy.svg';
import russiaflag from '../countries/rs.svg';
import arabiaflag from '../countries/sa.svg';
import egyptflag from '../countries/et.svg';
import spainflag from '../countries/es.svg';
import portugalflag from '../countries/pt.svg';
import iranflag from '../countries/ir.svg';
import moroccoflag from '../countries/ma.svg';
import franceflag from '../countries/fr.svg';
import denmarkflag from '../countries/dk.svg';
import peruflag from '../countries/pe.svg';
import australiaflag from '../countries/au.svg';
import crotiaflag from '../countries/hr.svg'
import argentinaflag from '../countries/ar.svg';
import nigeriaflag from '../countries/ng.svg';
import icelandflag from '../countries/is.svg';
import brazilflag from '../countries/br.svg';
import switzerlandflag from '../countries/ch.svg';
import serbiaflag from '../countries/si.svg';
import costaricaflag from '../countries/cr.svg';
import swedenflag from '../countries/se.svg';
import mexicoflag from '../countries/mx.svg';
import koreaflag from '../countries/kr.svg';
import germanyflag from '../countries/de.svg';
import belgiumflag from '../countries/be.svg';
import englandflag from '../countries/gb.svg';
import tunisiaflag from '../countries/tn.svg';
import panamaflag from '../countries/pa.svg';
import colombiaflag from '../countries/co.svg';
import japanflag from '../countries/jp.svg';
import senegalflag from '../countries/sn.svg';
import polandflag from '../countries/pl.svg';
import none from '../countries/none.svg';


var groupATeams = new Array ("Uruguay", "Russia", "Saudi Arabia", "Egypt");
var groupAFlags = new Array (uruguayflag, russiaflag, arabiaflag, egyptflag,);
var groupAOverall = new Array (89, 83, 72, 79);
var groupBTeams = new Array ("Spain", "Portugal", "Iran", "Morocco");
var groupBFlags = new Array (spainflag, portugalflag, iranflag, moroccoflag);
var groupBOverall = new Array (93, 89, 75, 77);
var groupCTeams = new Array ("France", "Denmark", "Peru", "Australia");
var groupCFlags = new Array (franceflag, denmarkflag, peruflag, australiaflag);
var groupCOverall = new Array (94, 82, 75, 74);
var groupDTeams = new Array ("Crotia", "Argentina", "Nigeria", "Iceland");
var groupDFlags = new Array (crotiaflag, argentinaflag, nigeriaflag, icelandflag);
var groupDOverall = new Array (86, 91, 80, 77);
var groupETeams = new Array ("Brazil", "Switzerland", "Serbia", "Costa Rica");
var groupEFlags = new Array (brazilflag, switzerlandflag, serbiaflag, costaricaflag);
var groupEOverall = new Array (94, 76, 77, 74);
var groupFTeams = new Array ("Sweden", "Mexico", "South Korea", "Germany");
var groupFFlags = new Array (swedenflag, mexicoflag, koreaflag, germanyflag);
var groupFOverall = new Array (83, 80, 76, 93);
var groupGTeams = new Array ("Belgium", "England", "Tunisia", "Panama");
var groupGFlags = new Array (belgiumflag, englandflag, tunisiaflag, panamaflag);
var groupGOverall = new Array (94, 90, 77, 70);
var groupHTeams = new Array ("Colombia", "Japan", "Senegal", "Poland");
var groupHFlags = new Array (colombiaflag, japanflag, senegalflag, polandflag);
var groupHOverall = new Array (80, 79, 80, 79);



class Tournament extends Component {

  constructor(props){
    super(props);
    this.state = {
      MatchTeams : ['Uruguay','Russia'],
      overall1 : 89,
      overall2 : 83,
      MatchFlags : [uruguayflag,russiaflag],
      score1  : 0,
      score2  : 0,
      groupAPoints : [0,0,0,0],
      groupBPoints : [0,0,0,0],
      groupCPoints : [0,0,0,0],
      groupDPoints : [0,0,0,0],
      groupEPoints : [0,0,0,0],
      groupFPoints : [0,0,0,0],
      groupGPoints : [0,0,0,0],
      groupHPoints : [0,0,0,0],

      day : 0,
    }
  }

  startMatch(e) {

    let overall1 = this.state.overall1;
    let overall2 = this.state.overall2;

    let newscore1 = Math.floor(overall1 * 5 * Math.random()/100);
    let newscore2 = Math.floor(overall2 * 5 * Math.random()/100);

    let nextDay = this.state.day + 1;

    this.setState({
      day: nextDay,
      score1 : newscore1,
      score2 : newscore2
    });


  }

  render() {
    return (
      <div className="container-fluid">
        <div className="text-center">
          <h1 className="header">World Cup 2018</h1>
        </div>  
        <div className="row">
          <Group className="col-12 col-md-6 col-lg-3" team={groupATeams} flag={groupAFlags} overall={groupAOverall} groupname="A" points={this.state.groupAPoints}/>
          <Group className="col-12 col-md-6 col-lg-3" team={groupBTeams} flag={groupBFlags} overall={groupBOverall} groupname="B" points={this.state.groupBPoints}/>
          <Group className="col-12 col-md-6 col-lg-3" team={groupCTeams} flag={groupCFlags} overall={groupCOverall} groupname="C" points={this.state.groupCPoints}/>
          <Group className="col-12 col-md-6 col-lg-3" team={groupDTeams} flag={groupDFlags} overall={groupDOverall} groupname="D" points={this.state.groupDPoints}/>
        </div>
        <div className="row">
          <Group className="col-12 col-md-6 col-lg-3" team={groupETeams} flag={groupEFlags} overall={groupEOverall} groupname="E" points={this.state.groupEPoints}/>
          <Group className="col-12 col-md-6 col-lg-3" team={groupFTeams} flag={groupFFlags} overall={groupFOverall} groupname="F" points={this.state.groupFPoints}/>
          <Group className="col-12 col-md-6 col-lg-3" team={groupGTeams} flag={groupGFlags} overall={groupGOverall} groupname="G" points={this.state.groupGPoints}/>
          <Group className="col-12 col-md-6 col-lg-3" team={groupHTeams} flag={groupHFlags} overall={groupHOverall} groupname="H" points={this.state.groupHPoints}/>
        </div>
        <div className="row">
          <ScoreTable team={this.state.MatchTeams} flag={this.state.MatchFlags} scores={[this.state.score1,this.state.score2]}/>
        </div>
        <div className="row justify-content-center">
          <button className="btn btn-warning"  onClick={this.startMatch.bind(this)} >Start Match</button>
        </div>
      </div>
    );
  }
}

export default Tournament;
