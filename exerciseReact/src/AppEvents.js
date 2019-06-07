import { hot } from "react-hot-loader/root";
import React from "react";
import "./App.less";

class App extends React.Component {
    someEventHandler = event => {
        console.log("Event ", event);
    };
    render() {
        return (
            <div className="App" style={{ height: "100%" }}>
                <button
                    onClick={() => {
                        console.warn("CLICKED");
                    }}
                >
                    CLICK Event
                </button>
                <div
                    onScroll={e => {
                        console.warn("Scroll", e);
                    }}
                    style={{ height: 120, overflow: "auto" }}
                >
                    Scroll
                    <div style={{ height: 600 }}>Scroll</div>
                </div>

                <button onClick={this.someEventHandler}>CLICK Event</button>
                <div onScroll={this.someEventHandler} style={{ height: 120, overflow: "auto" }}>
                    Scroll
                    <div style={{ height: 600 }}>Scroll</div>
                </div>
            </div>
        );
    }
}

export default hot(App);
