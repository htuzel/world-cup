import React, { Component } from 'react';
import './ScoreTable.css';
import Digit0 from '../digits/0.png';
import Digit1 from '../digits/1.png';
import Digit2 from '../digits/2.png';
import Digit3 from '../digits/3.png';
import Digit4 from '../digits/4.png';
import Digit5 from '../digits/5.png';
import Digit6 from '../digits/6.png';
import Digit7 from '../digits/7.png';
import Digit8 from '../digits/8.png';
import Digit9 from '../digits/9.png';

class ScoreTable extends Component {
  constructor(props) {
      super(props);
      this.state = {
          point : 0,
      }
  }  


  render() {

    return (
        
        <div className="container pl-5">
            <div className="scoreTable row col-12 text-center justify-content-center ">
                <div className="col-3 pull-right">
                    <span className="col-4">
                        <img className="countryFlag" src={this.props.flag[0]} alt="country flag"/>
                    </span>
                    <span className="col-8 teamName">
                        {this.props.team[0]}
                    </span>
                </div>
                <div className="col-1">
                    <img className="scoreDigit" src={Digit0} alt="Score Digit 1"/>
                </div>
                <div className="col-1">
                    <img className="scoreDigit" src={Digit0} alt="Score Digit 2"/>
                </div>
                <div className="col-3 pull-left">
                    <span className="col-8 teamName">
                        {this.props.team[1]}
                    </span>
                    <span className="col-4">
                        <img className="countryFlag" src={this.props.flag[1]} alt="country flag"/>
                    </span>
                </div>
            </div>
        </div>
    );
  }
}

export default ScoreTable;
