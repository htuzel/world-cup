import React, { Component } from 'react';
import Team from './Team';
import './Group.css';

class Group extends Component {

  constructor(props){
    super(props);
  }

  render() {

    let newTeams = this.props.team.sort(function(a, b){
      var keyA = new Date(a.point),
          keyB = new Date(b.point);
      // Compare the 2 dates
      if(keyA > keyB) return -1;
      if(keyA < keyB) return 1;
      return 0;
    });

    return (
      <div className="col-12 col-md-6 col-lg-3 p-3">
        <div className="group pb-1">
          <div className="groupHeader">
            <span className="groupName">{"Group " + this.props.groupname}</span>  
          </div>
          <div className="teams">
            <Team team={newTeams[0]} />
            <Team team={newTeams[1]} />
            <Team team={newTeams[2]} />
            <Team team={newTeams[3]} />
          </div>
        </div>
      </div>

 
    );
  }
}

export default Group;
