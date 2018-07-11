import React, { Component } from 'react';
import './Team.css';

class Team extends Component {

  render() {

    return (
      <div>
        <div className="team col-12">
            <span className="col-3">
                <img className="countryFlag" src={this.props.flag} alt="country flag"/>
            </span>
            <span className="col-6 teamName">
                {this.props.team}
            </span>
            <span className="col-6 teamOverall">
                {this.props.overall}
            </span>
        </div>
      </div>       
    );
  }
}

export default Team;
