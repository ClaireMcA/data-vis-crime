// import logo from './logo.svg';
import React, { Component } from "react";
import '../App.css';
// import AutoGrid from './components/Grid';
// import Circle from './components/Circle';
import AreaCircle from '../components/AreaCircle';
import DiscreteSliderSteps from '../components/Slider';
import * as Constants from '../constants';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { green } from "@mui/material/colors";




class Belconnen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: "14_Q1",
      data: "CANBERRA"
    }
    // this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (event) => {
    const index = event.target.value - 1;
    const sliderValue = Constants.time[index].label;
    this.setState({ sliderValue });
    console.log(event);
  }

  // handleClick = (event) => {
  //   // console.log(event.target.id);
  //   const data = event.target.id;
  //   console.log(data);
  //   this.setState({data});
  // }

  renderCircles = () => {
    const elements = [];
    // const input = this.state.data
    const input = this.props.value
    console.log(input)
    const area = Constants.suburbAreasRef[0][input]
    // const area = Constants.suburbAreas[input]
    // console.log(area)
    // console.log(input)
    const m = Constants.suburbAreas[area].range.m
    const n = Constants.suburbAreas[area].range.n
    // const m = 0
    // const n = 25
    // console.log(m, n)
    // console.log(Constants.suburbs)
    for (let i = m; i < n; i++) {
      const suburb = Constants.suburbs[i].id;
      elements.push(
        <Link id={suburb} to={"/" + suburb}>
            <AreaCircle 
            key = {suburb}
            id = {i}
            sliderValue= {this.state.sliderValue}
            area={suburb}
            //   onClick={this.handleClick}
            />
        </Link>
      );
      // console.log(suburb)
    }
    return <React.Fragment>
        <h1>Crime Data in Canberra</h1>
        <h2>{input}</h2>
        {elements}
      </React.Fragment>;
    
  }


  render () {
    return (
      <div className="gridDiv gridDiv-belconnen">
        <div class="empty-div"></div>
        {/* <div class="empty-div-2"></div>
        <div class="empty-div-3"></div>
        <div class="empty-div-4"></div> */}
        
        <div class="header-box"></div>
        {/* <img class="belconnen-img" src={"/belconnen.png"} /> */}
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


export default Belconnen;