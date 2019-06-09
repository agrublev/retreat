import React from "react";
import { getNextId, initData } from "./utils";

function addNew(title) {
  initData.items.push({ id: getNextId(initData.items), title });
  return initData.items;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: { ...props.store },
      newTodoTitle: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Minimal React</h1>
        <h2>Store using internal component state. May be show Redux ?</h2>
        <input value={this.state.newTodoTitle} onChange={this.handleChange} />
        <button onClick={this.handleNewTodoClick}>Add</button>
        <ul>
          {this.state.store.items.map(item => (
            <li key={item.id}>
              <span>{item.id}. </span>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  handleChange = e => {
    this.setState({ newTodoTitle: e.target.value });
  };

  handleNewTodoClick = e => {
    e.stopPropagation();
    const items = addNew(this.state.newTodoTitle);
    this.setState({
      store: { ...this.state.store, items },
      newTodoTitle: ""
    });
  };
}

export default App;
