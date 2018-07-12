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
  
  Digit = new Array([Digit0,Digit1,Digit2,Digit3,Digit4,Digit5,Digit6,Digit7,Digit8,Digit9]);

  constructor(props){
      super(props); 
      this.state = {
          score1 : this.Digit[0][this.props.scores[0]],
          score2 : this.Digit[0][this.props.scores[1]],
      }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ 
        score1 : this.Digit[0][nextProps.scores[0]],
        score2 : this.Digit[0][nextProps.scores[1]],
    });  
  }

  render() {

    return (
        
        <div className="container pl-5">
            <div className="scoreTable row col-12 text-center justify-content-center ">
                <div className="col-6 col-md-3 pull-right">
                    <span className="col-4">
                        <img className="countryFlag" src={this.props.teams[0].flag} alt="country flag"/>
                    </span>
                    <span className="col-8 teamName">
                        {this.props.teams[0].name}
                    </span>
                </div>
                <div className="col-6 col-md-1">
                    <img className="scoreDigit" src={this.state.score1} alt="Score Digit 1"/>
                </div>
                <div className="col-6 col-md-1">
                    <img className="scoreDigit" src={this.state.score2} alt="Score Digit 2"/>
                </div>
                <div className="col-6 col-md-3 pull-left">
                    <span className="col-8 teamName">
                        {this.props.teams[1].name}
                    </span>
                    <span className="col-4">
                        <img className="countryFlag" src={this.props.teams[1].flag} alt="country flag"/>
                    </span>
                </div>
            </div>
        </div>
    );
  }
}

export default ScoreTable;
