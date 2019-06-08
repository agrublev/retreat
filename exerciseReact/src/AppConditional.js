import { hot } from "react-hot-loader/root";
import React from "react";
import "./App.less";
import { If, Then, Else, When, Unless, Switch, Case, Default } from "react-if";

const Comp = () => (
    <div>
        <h2>SampleComponent</h2>
        <div>Here it is</div>
    </div>
);

class App extends React.Component {
    state = {
        shouldShowComponent: Math.random() > 0.62
    };

    render() {
        const { shouldShowComponent } = this.state;
        return (
            <div className="App">
                <h1>
                    Our component
                    <button
                        onClick={() => this.setState({ shouldShowComponent: !shouldShowComponent })}
                    >
                        TOGGLE
                    </button>
                </h1>
                <h3>Standard react way</h3>
                {shouldShowComponent ? <Comp /> : null}
                <h3>React-if</h3>
                <If condition={shouldShowComponent}>
                    <Comp />
                </If>
                <If condition={shouldShowComponent}>
                    <Then>
                        <span>Showing</span>
                    </Then>
                    <Else>
                        <span>Not showing</span>
                    </Else>
                </If>
            </div>
        );
    }
}

export default hot(App);
