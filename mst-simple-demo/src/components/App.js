import "./App.css";
import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Header, Item } from "./index";

@observer
class App extends React.Component {
  @observable inputValue = "";

  inputChange = e => {
    this.inputValue = e.target.value;
  };

  addNew = () => {
    this.props.store.addNew(this.inputValue);
    this.inputValue = "";
  };

  _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.addNew();
    }
  };

  render() {
    return (
      <div className="App">
        <Header>
          <input maxLength={45} value={this.inputValue}
                 onChange={this.inputChange}
                 onKeyDown={this._handleKeyDown}/>
          <button onClick={this.addNew}>Add</button>
        </Header>
        <div>

          <div className="App-list">
            {this.props.store.items.length ? (
              this.props.store.items.map(item => (
                <Item key={item.id} item={item}/>
              ))
            ) : (
              <div className="App-list-empty">
                All clear. Enter new task name and press "Add"</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
