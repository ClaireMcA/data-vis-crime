// import logo from './logo.svg';
import { Component } from "react";
import './App.css';
// import AutoGrid from './components/Grid';
// import Circle from './components/Circle';
import AreaCircle from './components/AreaCircle';
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

  renderCircles = (m, n) => {
    const elements = [];
    for (let i = m; i < n; i++) {
      const suburb = Constants.suburbs[i].id;
      elements.push(
        <AreaCircle 
          key = {suburb}
          id = {i}
          sliderValue= {this.state.sliderValue}
          area={suburb}
        />
      );
      // console.log(suburb)
    }
    return <div>{elements}</div>;
    
  }


  render () {
    return (
      <div>
        <div className="BelconnenArea">
          <h1>Belconnen Area</h1>
          {this.renderCircles(0, 24)}
        </div>
        <div className="GungahlinArea">
          <h1>Gungahlin Area</h1>
          {this.renderCircles(25, 43)}
        </div>
        <div className="InnerNorthArea">
          <h1>Inner North Area</h1>
          {this.renderCircles(44, 61)}
        </div>
        <div className="InnerSouthArea">
          <h1>Inner South Area</h1>
          {this.renderCircles(62, 76)}
        </div>
        <div className="WestonCreekArea">
          <h1>Weston Creek Area</h1>
          {this.renderCircles(77, 85)}
        </div>
        <div className="MolongloArea">
          <h1>Molonglo Area</h1>
          {this.renderCircles(86, 89)}
        </div>
        <div className="WodenCreekArea">
          <h1>Woden Creek Area</h1>
          {this.renderCircles(90, 101)}
        </div>
        <div className="TuggeranongArea">
          <h1>Tuggeranong Area</h1>
          {this.renderCircles(102, 119)}
        </div>
        <div className="MiscArea">
          <h1>Misc Areas</h1>
          {this.renderCircles(120, 123)}
        </div>
        <div>
            {/* <Circle 
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
            /> */}
        </div>
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