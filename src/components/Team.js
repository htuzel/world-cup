import React, { Component } from 'react';
import flag from '../logo.svg';
import './Team.css';

class Team extends Component {

  render() {

    return (
      <div className="col-1">
        <div className="team col-12">
            <span className="col-3">
                <img className="countryFlag" src={flag} alt="country flag"/>
            </span>
            <span className="col-9 teamName">
                {this.props.team}
            </span>
        </div>
      </div>       
    );
  }
}

export default Team;
