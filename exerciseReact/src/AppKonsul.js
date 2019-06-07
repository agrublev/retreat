import { hot } from "react-hot-loader/root";
import React from "react";
import "./App.less";
import createKonsul from "konsul";
import renderToKonsul from "react-konsul";

const konsul = createKonsul();
const renderConsole = ({ text, style = { fontWeight: "bold", fontSize: "26px" } }) => {
    renderToKonsul(<text style={style}>{text}</text>, konsul);
};
// renderToKonsul(
//     <group name="test">
//         <text style={{ fontWeight: "bold", fontSize: "26px" }}>Hello world!</text> <text>TEST</text>
//     </group>,
//     konsul
// );
class SampleComponent extends React.Component {
    state = {
        someNumber: 1
    };

    constructor(props) {
        super(props);
        renderConsole({ text: "constructor called first" });
        this.someMethod();
    }

    componentDidMount() {
        renderConsole({ text: "component did mount called after render" });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`
Component was updated
Old state number was ${prevState.someNumber}
New state number is ${this.state.someNumber}
`);
    }

    componentWillUnmount() {
        renderConsole({ text: "Unmount component!" });
    }

    render() {
        const { someNumber } = this.state;
        if (someNumber === 1) console.log("render called after constructor");
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
        renderConsole({ text: "someMethod called in constructor!" });
    };
}
class App extends React.Component {
    state = {
        shouldShowComponent: false
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ shouldShowComponent: true });
        }, 3000);
    }

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

    someMethod = () => {
        console.log("someMethod called in constructor!");
    };
}

export default hot(App);
