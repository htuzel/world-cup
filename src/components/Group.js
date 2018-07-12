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
            <Team team={this.props.team[0]} flag={this.props.flag[0]} overall={this.props.overall[0]} point={this.props.points[0]} />
            <Team team={this.props.team[1]} flag={this.props.flag[1]} overall={this.props.overall[1]} point={this.props.points[1]} />
            <Team team={this.props.team[2]} flag={this.props.flag[2]} overall={this.props.overall[2]} point={this.props.points[2]} />
            <Team team={this.props.team[3]} flag={this.props.flag[3]} overall={this.props.overall[3]} point={this.props.points[3]} />
          </div>
        </div>
      </div>

 
    );
  }
}

export default Group;
