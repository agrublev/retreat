import React, { Component } from "react";

//
const C1 = ({ name }) => {
    console.warn(name);
    return <div>I will{name} be a list item</div>;
};

export default class App extends Component {
    state = {
        innerComp: true,
        list: []
    };

    addItem = () => {
        // this.state.list.push({ name: Date.now() });
        // // this.setState({ list: this.state.list });
        // this.setState({ refresh: Date.now() });
        this.setState(({ list }) => {
            list.push({ name: Date.now() });
            return { list };
        });
    };

    render() {
        const { list } = this.state;
        return (
            <div>
                <button onClick={this.addItem}>ADD</button>
                {list.map(listItem => {
                    return <C1 key={listItem.name+Date.now()} name={listItem.name} />;
                })}
            </div>
        );
    }
}
