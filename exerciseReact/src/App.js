import { hot } from "react-hot-loader/root";
import React from "react";
import "./App.less";
import { renderToConsole } from "./helpers.js";

class SampleComponent extends React.Component {
    state = {
        someNumber: 1
    };

    constructor(props) {
        super(props);
        console.clear();
        renderToConsole("constructor", "rendered first");
        this.someMethod();
    }

    componentDidMount() {
        renderToConsole("componentDidMount", "called after render");
    }

    componentDidUpdate(prevProps, prevState) {
        renderToConsole(
            "componentDidUpdate",
            `Component was updated
 Old state number was ${prevState.someNumber}
 New state number is ${this.state.someNumber}`
        );
    }

    componentWillUnmount() {
        renderToConsole("componentWillUnmount", "Unmount component!");
    }

    render() {
        const { someNumber } = this.state;
        if (someNumber === 1) renderToConsole("render", "called after constructor");
        return (
            <div className="App">
                <h1>Our component</h1>
                <div>
                    State has someNumber with value <b>{someNumber}</b>
                </div>
                <div>
                    Let's update state to see componentDidUpdate called
                    <button onClick={() => this.setState({ someNumber: someNumber + 1 })}>
                        Add 1
                    </button>
                </div>
            </div>
        );
    }

    someMethod = () => {
        renderToConsole("someMethod", "called in constructor!");
    };
}

class App extends React.Component {
    state = {
        shouldShowComponent: false
    };

    render() {
        const { shouldShowComponent } = this.state;
        return (
            <div className="App">
                <h1>Our component</h1>
                <div>
                    Let's mount our component to see its cycles
                    <button
                        onClick={() => this.setState({ shouldShowComponent: !shouldShowComponent })}
                    >
                        {!shouldShowComponent ? "Show" : "Hide"} Component
                    </button>
                </div>
                {shouldShowComponent ? <SampleComponent /> : null}
            </div>
        );
    }
}

export default hot(App);
