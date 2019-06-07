import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Angel from "./Angel";

class App extends Component {
    state = {
        correct: "maybe"
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <button
                        style={{ fontSize: 18, padding: 15 }}
                        onClick={() => {
                            this.setState({ correct: Date.now() });
                        }}
                    >
                        Click To Change
                    </button>
                    <Angel yes={this.state.correct} />
                </header>
            </div>
        );
    }
}

export default App;
