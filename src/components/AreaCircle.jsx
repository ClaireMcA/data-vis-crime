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
    // const myArea = this.props["area"];
    // const state = this.props["sliderValue"];
    // const ref = Constant.suburbAreasRef[0][myArea];
    // console.log(ref);
    // // console.log(state);
    // const array = Constant.suburbAreas[myArea][ref][0][state];
    // // console.log(array);

    // // Constant.suburbAreas[0]["Belconnen"][0][14_Q1]

    // const value = (array / 3172) * 100
    // return value;


    // const myArea = this.props["area"];
    const state = this.props["sliderValue"];
    const ref = this.props.id;
    // const ref = Constant.suburbAreasRef[0][myArea];
    console.log(Constant.suburbs);
    // console.log(state);
    // const array = Constant.suburbs[ref][myArea][0][state];
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
      <svg xmlns="http://www.w3.org/2000/svg" width={(this.findValue()) * 2} height={(this.findValue()) * 2} version="1.1">
          <circle cx={this.findValue()} cy={this.findValue()} r={this.findValue()}/>
          {/* console.log({this.findValue}); */}
      </svg>
    );
  }
}