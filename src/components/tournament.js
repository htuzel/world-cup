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

var Uruguay = {name: "Uruguay", flag: uruguayflag, overall: 89, point: 0};
var Russia = {name: "Russia", flag: russiaflag, overall: 83, point:0};
var Arabia = {name: "S. Arabia", flag: arabiaflag, overall: 72, point: 0};
var Egypt = {name: "Egypt", flag: egyptflag, overall: 80, point:0};
var Spain = {name: "Spain", flag: spainflag, overall: 93, point: 0};
var Portugal = {name: "Portugal", flag: portugalflag, overall: 88, point:0};
var Iran = {name: "Iran", flag: iranflag, overall: 73, point: 0};
var Morocco = {name: "Morocco", flag: moroccoflag, overall: 77, point:0};
var France = {name: "France", flag: franceflag, overall: 94, point: 0};
var Denmark = {name: "Denmark", flag: denmarkflag, overall: 81, point:0};
var Peru = {name: "Peru", flag: peruflag, overall: 75, point: 0};
var Australia = {name: "Australia", flag:australiaflag , overall: 74, point:0};
var Crotia = {name: "Crotia", flag: crotiaflag, overall: 86, point: 0};
var Argentina = {name: "Argentina", flag: argentinaflag, overall: 91, point:0};
var Nigeria = {name: "Nigeria", flag: nigeriaflag, overall: 80, point: 0};
var Iceland = {name: "Iceland", flag: icelandflag, overall: 77, point:0};
var Brazil = {name: "Brazil", flag: brazilflag, overall: 94, point: 0};
var Switzerland = {name: "Switzerland", flag: switzerlandflag, overall: 75, point:0};
var Serbia = {name: "Serbia", flag: serbiaflag, overall: 76, point: 0};
var CostaRica = {name: "Costa Rica", flag: costaricaflag, overall: 71, point:0};
var Sweden = {name: "Sweden", flag: swedenflag, overall: 80, point: 0};
var Mexico = {name: "Mexico", flag: mexicoflag, overall: 81, point:0};
var SouthKorea = {name: "South Korea", flag: koreaflag, overall: 72, point: 0};
var Germany = {name: "Germany", flag: germanyflag, overall: 93, point:0};
var Belgium = {name: "Belgium", flag: belgiumflag, overall: 94, point: 0};
var England = {name: "England", flag: englandflag, overall: 90, point:0};
var Tunisia = {name: "Tunisia", flag: tunisiaflag, overall: 71, point: 0};
var Panama = {name: "Panama", flag: panamaflag, overall: 78, point:0};
var Colombia = {name: "Colombia", flag: colombiaflag, overall: 78, point: 0};
var Japan = {name: "Japan", flag: japanflag, overall: 80, point:0};
var Senegal = {name: "Senegal", flag: senegalflag, overall: 81, point: 0};
var Poland = {name: "Poland", flag: polandflag, overall: 79, point:0};

var groupATeams = new Array (Uruguay, Russia, Arabia, Egypt);

var groupBTeams = new Array (Spain, Portugal,Iran,Morocco);

var groupCTeams = new Array (France, Denmark, Peru, Australia);

var groupDTeams = new Array (Crotia,Argentina,Nigeria,Iceland);

var groupETeams = new Array (Brazil, Switzerland, Serbia, CostaRica);

var groupFTeams = new Array (Sweden, Mexico, SouthKorea, Germany);

var groupGTeams = new Array (Belgium, England, Tunisia, Panama);

var groupHTeams = new Array (Colombia, Japan, Senegal, Poland);


var teams = groupATeams.concat(groupBTeams, groupCTeams, groupDTeams, groupETeams, groupFTeams, groupGTeams, groupHTeams);

var fixtureArray = new Array([0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,15],[16,17],[18,19],[20,21],[22,23],[24,25],[26,27],[28,29],[30,31],
  [0,2],[1,3],[4,6],[5,7],[8,10],[9,11],[12,14],[13,15],[16,18],[17,19],[20,22],[21,23],[24,26],[25,27],[28,30],[29,31],
  [0,3],[1,2],[4,7],[5,6],[8,11],[9,10],[12,15],[13,14],[16,19],[17,18],[20,23],[21,22],[24,27],[25,26],[28,31],[29,30]);

class Tournament extends Component {

  constructor(props){
    super(props);
    this.state = {
      MatchTeams : [Uruguay,Russia],
      score1  : 0,
      score2  : 0,
      day : 0,
      teams : teams,
      toggleButton: true,
    }
  }

  startMatch(e) {

    let overall1 = this.state.MatchTeams[0].overall;
    let overall2 = this.state.MatchTeams[1].overall;

    let newscore1 = Math.floor(overall1 * 8 * Math.random()/120);
    let newscore2 = Math.floor(overall2 * 8 * Math.random()/120);

    if(newscore1 > newscore2){

      let teamsIndex = fixtureArray[this.state.day];
      let newTeams = this.state.teams.slice(0);
      newTeams[teamsIndex[0]].point = teams[teamsIndex[0]].point + 3;
      this.setState({
        teams: newTeams,
        score1 : newscore1,
        score2 : newscore2,
        toggleButton: false,
      });

    } else if(newscore1 < newscore2) {
      
      let teamsIndex = fixtureArray[this.state.day];
      let newTeams = this.state.teams.slice(0);
      newTeams[teamsIndex[1]].point = teams[teamsIndex[1]].point + 3;
      this.setState({
        teams: newTeams,
        score1 : newscore1,
        score2 : newscore2,
        toggleButton: false,

      });

    } else {

      let teamsIndex = fixtureArray[this.state.day];
      let newTeams = this.state.teams.slice(0);
      newTeams[teamsIndex[0]].point = teams[teamsIndex[0]].point + 1;
      newTeams[teamsIndex[1]].point = teams[teamsIndex[1]].point + 1;
      this.setState({
        teams: newTeams,
        score1 : newscore1,
        score2 : newscore2,
        toggleButton: false,

      });

    }

    
  }

  nextMatch(e) {

    let nextDay = this.state.day + 1;
    let NextTeamsIndex = fixtureArray[nextDay];
    let teamOne = teams[NextTeamsIndex[0]];
    let teamTwo = teams[NextTeamsIndex[1]];  


    this.setState({
      day: nextDay,
      MatchTeams : [teamOne,teamTwo],
      score1 : 0,
      score2 : 0,
      toggleButton: true,

    });

  }

  render() {
    if(this.state.toggleButton){
      var button = <div className="row justify-content-center">
        <button className="btn btn-warning"  onClick={this.startMatch.bind(this)} >Start Match</button>
      </div>
    } else {
      var button =  <div className="row justify-content-center mt-2">
        <button className="btn btn-danger"  onClick={this.nextMatch.bind(this)} >Next Match</button>
      </div>
    }

    return (
      
      <div className="container-fluid">
        <div className="text-center">
          <h1 className="header">World Cup 2018</h1>
        </div>  
        <div className="row">
          <Group className="col-12 col-md-6 col-lg-3" team={groupATeams} groupname="A"/>
          <Group className="col-12 col-md-6 col-lg-3" team={groupBTeams} groupname="B"/>
          <Group className="col-12 col-md-6 col-lg-3" team={groupCTeams} groupname="C"/>
          <Group className="col-12 col-md-6 col-lg-3" team={groupDTeams} groupname="D"/>
        </div>
        <div className="row">
          <Group className="col-12 col-md-6 col-lg-3" team={groupETeams} groupname="E"/>
          <Group className="col-12 col-md-6 col-lg-3" team={groupFTeams} groupname="F"/>
          <Group className="col-12 col-md-6 col-lg-3" team={groupGTeams} groupname="G"/>
          <Group className="col-12 col-md-6 col-lg-3" team={groupHTeams} groupname="H"/>
        </div>
        <div className="row">
          <ScoreTable teams={this.state.MatchTeams} scores={[this.state.score1,this.state.score2]}/>
        </div>
        {button}
      </div>
    );
  }
}

export default Tournament;
