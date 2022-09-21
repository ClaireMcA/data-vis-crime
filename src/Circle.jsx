import React, { Component } from "react";

export default class Circle extends Component {

    render() {
      return (
        <div>
          <h1>Circle!</h1>
          <h2>{ this.props.number }</h2>
        </div>
      );
    }
  }