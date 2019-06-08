import React, { Component } from "react";
import logo from "./logo.svg";

class Header extends Component {
  render() {
    return <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1>Task List Demo</h1>
      <div className="App-input">
        {this.props.children}
      </div>
    </header>;
  }
}

export default Header;
