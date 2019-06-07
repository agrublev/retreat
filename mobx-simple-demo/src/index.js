import React from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import { getNextId, initData } from "./utils";

class ItemModel {
  @observable id;
  @observable title;

  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}

class MobxStore {
  @observable items = [];

  constructor(initData) {
    this.items = initData.items;
  }

  @action addNew(title) {
    this.items.push(new ItemModel(getNextId(this.items), title));
  }
}

@observer
class MobxView extends React.Component {
  @observable inputValue = "";

  inputChange = e => {
    this.inputValue = e.target.value;
  };

  addNew = () => {
    this.props.store.addNew(this.inputValue);
    this.inputValue = "";
  };

  render() {
    return (
      <div>
        <h1>Mobx + React</h1>
        <h2>Demo task list.</h2>
        <input value={this.inputValue} onChange={this.inputChange}/>
        <button onClick={this.addNew}>Add</button>
        <ul>
          {this.props.store.items.map(item => (
            <li key={item.id}>
              <span>{item.id}. </span>
              <span> {item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

render(
  <div>
    <MobxView store={new MobxStore(initData)}/>
    <DevTools/>
  </div>,
  document.getElementById("root")
);
