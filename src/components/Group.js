import React, { Component } from 'react';
import Team from './Team';
import './Group.css';

class Group extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="group col-3">
        <div className="groupHeader">
          <span className="groupName">Group A</span>  
        </div>
        <div className="teams">
          <Team team={this.props.team[0]} flag={this.props.flag[0]} overall={this.props.overall[0]}/>
          <Team team={this.props.team[1]} flag={this.props.flag[1]} overall={this.props.overall[1]}/>
          <Team team={this.props.team[2]} flag={this.props.flag[2]} overall={this.props.overall[2]}/>
          <Team team={this.props.team[3]} flag={this.props.flag[3]} overall={this.props.overall[3]}/>
        </div>
      </div>
 
    );
  }
}

export default Group;
