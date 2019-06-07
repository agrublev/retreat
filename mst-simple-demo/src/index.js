import React from "react";
import { render } from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import { getNextId, initData } from "./utils";

import { types } from "mobx-state-tree";

export const Item = types
  .model("ItemModel", {
    id: types.optional(types.number, () => Math.random()),
    title: types.string
  });

export const MobxStore = types
  .model("TodoStore", {
    items: types.array(Item)
  })
  .actions(self => ({
    addNew(title) {
      self.items.push({ id: getNextId(self.items), title });
    }
  }));

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
        <h1>Mobx State Tree</h1>
        <h2>Task list demo:</h2>
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
    <MobxView store={MobxStore.create(initData)}/>
    <DevTools/>
  </div>,
  document.getElementById("root")
);