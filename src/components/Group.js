import React, { Component } from 'react';
import Team from './Team';
import './Group.css';

class Group extends Component {

  render() {
    return (
      <div className="col-12 col-md-6 col-lg-3 p-3">
        <div className="group pb-1">
          <div className="groupHeader">
            <span className="groupName">{"Group " + this.props.groupname}</span>  
          </div>
          <div className="teams">
            <Team team={this.props.team[0]} />
            <Team team={this.props.team[1]} />
            <Team team={this.props.team[2]} />
            <Team team={this.props.team[3]} />
          </div>
        </div>
      </div>

 
    );
  }
}

export default Group;
