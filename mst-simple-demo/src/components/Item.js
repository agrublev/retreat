import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { observer } from "mobx-react";

@observer
class Item extends Component {
  render() {
    return <div className="App-list-item">
      <div className={`App-list-item-id App-${this.props.item.status}`}>
        <span>{this.props.item.id}</span></div>
      <span className={`App-list-item-title App-${this.props.item.status}`}>
                  {this.props.item.title}</span>
      <button onClick={this.props.item.changeStatus}
              className={`App-${this.props.item.status}`}>
        {this.props.item.getChangeStatusLabel}</button>
      <button onClick={this.props.item.delete} className="App-danger">
        Delete
      </button>
    </div>;
  }
}

Item.propTypes = { item: PropTypes.any };

export default Item;
