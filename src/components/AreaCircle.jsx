import React, { Component } from "react";
import * as Constant from '../constants'


// console.log(Constant.suburbAreas[1]["14_Q1"])


// const todoItems = Constant.suburbAreas.map((id) =>
//   <li key={Constant.suburbAreas.id}>
//     {id}
//   </li>
// );
// console.log(Constant.suburbAreas[0]["BELCONNEN"][0]["14_Q3"])

export default class AreaCircle extends Component {
    
  findValue = () => {

    const state = this.props["sliderValue"];
    const ref = this.props.id;
    console.log(Constant.suburbs);
    const array = Constant.suburbs[ref].values[0][state]
    // console.log();
    
    const value = (array / 867) * 100
    return value;


  }

  

  render() {
    return (
      // <div>
      //   <h1>This is A title</h1>
      //   <p>{this.findValue()}</p>
        
      // </div>
      <div className="circleShape">
        <svg xmlns="http://www.w3.org/2000/svg" width={(this.findValue()) * 2} height={(this.findValue()) * 2} version="1.1">
            <circle cx={this.findValue()} cy={this.findValue()} r={this.findValue()}/>
            {/* console.log({this.findValue}); */}
        </svg>
      </div>
    );
  }
}