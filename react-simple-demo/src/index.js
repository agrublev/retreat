import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { getNextId, initData } from "./utils";

// Define external function - not a pure function
function addNew(title) {
  initData.items.push({ id: getNextId(initData.items), title });
  return initData.items;
}
// Component
class App extends React.Component {
// Constructor
  constructor(props) {
    super(props);
    this.state = { // State
      store: { ...props.store },
      newTodoTitle: ""
    };
  }
// Rendering
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
// Handle keyboard entry in the input
  handleChange = e => {
    this.setState({ newTodoTitle: e.target.value });
  };
// Handle add new button click
  handleNewTodoClick = e => {
    e.stopPropagation();
    const items = addNew(this.state.newTodoTitle);
    this.setState({
      store: { ...this.state.store, items },
      newTodoTitle: ""
    });
  };
}
// Export the component to be reused when imported
export default App;


ReactDOM.render(<App />, document.getElementById('root'));
