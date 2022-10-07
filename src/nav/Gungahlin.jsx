// import logo from './logo.svg';
import React, { Component } from "react";
import '../App.css';
// import AutoGrid from './components/Grid';
// import Circle from './components/Circle';
import AreaCircle from '../components/AreaCircle';
import DiscreteSliderSteps from '../components/Slider';
import * as Constants from '../constants'




class Gungahlin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: "14_Q1",
      data: "GREATERGUNGAHLIN"
    }
    // this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (event) => {
    const index = event.target.value - 1;
    const sliderValue = Constants.time[index].label;
    this.setState({ sliderValue });
    console.log(event);
  }

//   handleClick = (event) => {
//     // console.log(event.target.id);
//     const data = event.target.id;
//     this.setState({data});
//   }

  renderCircles = () => {
    const elements = [];
    const input = this.state.data
    const area = Constants.suburbAreasRef[0][input]
    const m = Constants.suburbAreas[area].range.m
    const n = Constants.suburbAreas[area].range.n
    for (let i = m; i < n; i++) {
      const suburb = Constants.suburbs[i].id;
      elements.push(
        <AreaCircle 
          key = {suburb}
          id = {i}
          sliderValue= {this.state.sliderValue}
          area={suburb}
          onClick={this.handleClick}
        />
      );
      // console.log(suburb)
    }
    return <React.Fragment>
        <h1>{this.state.data}</h1>
        {elements}
      </React.Fragment>;
    
  }


  render () {
    return (
      <div className="gridDiv">
        {this.renderCircles()}
          <div className="slider">
            <DiscreteSliderSteps
              onChange= {this.handleChange}
            />
          </div>
      </div>
    );
  }
}


export default Gungahlin;