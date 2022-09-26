// import logo from './logo.svg';
import { Component } from "react";
import './App.css';
// import AutoGrid from './components/Grid';
import Circle from './components/Circle';
import DiscreteSliderSteps from './components/Slider';
import * as Constants from './constants'




class App extends Component {
  state = {
    sliderValue: "14_Q1"
  }

  handleChange = (event) => {
    const index = event.target.value - 1;
    const sliderValue = Constants.time[index].label;
    this.setState({ sliderValue });
  }




  render () {
    return (
      <div>
        <div>
            <Circle 
              sliderValue={this.state.sliderValue}
              area="BELCONNEN"
            />
            <Circle 
              sliderValue={this.state.sliderValue}
              area="GUNGAHLIN"
            />
            <Circle 
              sliderValue={this.state.sliderValue}
              area="INNERNORTH"
            />
            <Circle 
              sliderValue={this.state.sliderValue}
              area="INNERSOUTH"
            />
            <Circle 
              sliderValue={this.state.sliderValue}
              area="WESTONCREEK"
            />
            <Circle 
              sliderValue={this.state.sliderValue}
              area="MOLONGLODISTRICT"
            />
            <Circle 
              sliderValue={this.state.sliderValue}
              area="WODENCREEK"
            />
            <Circle 
              sliderValue={this.state.sliderValue}
              area="TUGGERANONGCREEK"
            />
            <Circle 
              sliderValue={this.state.sliderValue}
              area="MISC"
            />
        </div>
        {/* <div>
            <Circle size="40"/>
            <Circle size="20"/>
            <Circle size="20"/>
            <Circle size="20"/>
            <Circle size="20"/>
        </div> */}
        <div>
            <DiscreteSliderSteps 
              onChange= {this.handleChange}
            />
        </div>
      </div>
    );
  }
}


export default App;