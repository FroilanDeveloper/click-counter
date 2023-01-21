import React, { Component } from "react";
import './style/Counter.css'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };
  }

  handleClick = () =>
    this.setState({
      clickCount: this.state.clickCount + 1,
    });

  render() {
    return (
      <div className="counter-form">
        <button className="button-form" onClick={this.handleClick}>
          Click
        </button>
        <p className="Count">{this.state.clickCount}</p>
      </div>
    );
  }
}

export default Counter;
