// import * as React from 'react';
import React, { Component } from 'react';
// import { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as Constants from '../constants'



class DiscreteSliderSteps extends Component {

    valueLabelFormat = (inputValue) => {
        const index = inputValue - 1;
        const timeFrame = Constants.time[index].label;
        return timeFrame;
    }


  
    render() {
        return (
            <div>
                {/* <h1>{currentValue}</h1> */}
                <Box sx={{ width: 600 }}>
                    <Slider
                        aria-label="Small steps"
                        defaultValue={1}
                        getAriaValueText={this.valueLabelFormat}
                        valueLabelFormat={this.valueLabelFormat}
                        step={1}
                        // value={this}
                        marks
                        min={1}
                        max={31}
                        valueLabelDisplay="auto"
                        // onChange={this.setState({timeframe: time[newValue - 1].label})}
                        // value={currentValue}
                        onChange={this.props.onChange }
                    />
                </Box>
            </div>
        ); 
    } 
}

export default DiscreteSliderSteps;




// export default class DiscreteSliderSteps extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { 
//             timeframe: '2014_Q1', 
//         };
//     }

    // const [value, setValue] = React.useState(1);

    //const handleChange = (event, newValue) => {
     // setValue(newValue);
    //};

    // handleSlide(event, newValue) {
    //     this.setState({ timeframe: time[newValue - 1].label });
    //     this.props.fish(this.state.timeframe);
    // }




// function valuetext(value) {
//   return `{marks}[${value}]`;
// }