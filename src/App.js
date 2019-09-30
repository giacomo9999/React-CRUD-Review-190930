import React, { Component } from "react";
import Todo from "./Todo";

import "./index.css";

class App extends Component {
  state = { show: false };
  render() {
    return (
      <div className="container-outer">
        <h1>Lasagna</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
