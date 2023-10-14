import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: "red",
      color2: "blue",
    };
  }

  handleButtonClick = () => {
    const color1 = this.state.color2;
    const color2 = this.state.color1;
    this.setState({
      color1,
      color2,
    });
  };

  render() {
    return (
      <div>
        <button
          style={{ backgroundColor: this.state.color1 }}
          onClick={() => this.handleButtonClick()}
        >
          BUTTON 1
        </button>
        <button
          style={{ backgroundColor: this.state.color2 }}
          onClick={() => this.handleButtonClick()}
        >
          BUTTON 2
        </button>
      </div>
    );
  }
}

export default App;
