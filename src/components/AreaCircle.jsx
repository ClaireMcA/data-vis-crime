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
    const array = Constant.suburbs[ref].values[0][state]


    // const divide = Math.max(...Constant.suburbs[ref].values[0])
    // const valuesArray = Constant.suburbs[ref].values[0]
    // let maxValue = 0;
    // for (const [value] of Object.entries(valuesArray)) {
    //   if(value > maxValue) {
    //     maxValue = value;
    //   }
    // }
    // console.log(divide)

    
    const value = (array / 3000) * 100
    return value;

    // console.log();
  }

  findCount = () => {
    const state = this.props["sliderValue"];
    const ref = this.props.id;
    const array = Constant.suburbs[ref].values[0][state]
    return array
  }

  findName = () => {

    const ref = this.props.id;
    const array = Constant.suburbs[ref].id
    // const value = (array / 867) * 100
    // console.log(array);
    return array;
  }

  

  render() {
    return (
      <React.Fragment>
        <div 
          className={"gridSVG"}
          // onClick={this.props.onClick}
          id={this.findName()}
        >
          <h5 
            className={"suburbHeading"}
            id={this.findName()}
          >
            {this.findName()}
            <br/>
            {this.findCount()}
          </h5>
          <svg 
            id={this.findName()}
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
            className={"suburbCircle"}
          >
            <circle 
              id={this.findName()}
              cx= "50%"
              cy= "50%"
              r={this.findValue()} 
            />
          </svg>
        </div>
      </React.Fragment>
    );
  }
}