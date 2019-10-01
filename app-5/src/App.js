import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image source={"https://i.redd.it/eqntkqfehnj01.jpg"}/>
      </div>
    );
  }
}

export default App;
