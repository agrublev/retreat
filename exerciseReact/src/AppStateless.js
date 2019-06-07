import { hot } from "react-hot-loader/root";
import React from "react";
import "./App.less";

const StatelessComponent = ({ someProp }) => <div>{someProp}</div>;

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <StatelessComponent someProp={"TEXT"} />
            </div>
        );
    }
}

export default hot(App);
