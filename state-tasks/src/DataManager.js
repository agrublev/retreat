import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import "./App.less";
import { observer } from "mobx-react";
import { db } from "../../data/index.js";
import TaskItem from "../../data/TaskItem.js";

@observer
class DataManager extends Component {
    state = {
        data: {
            items: [],
            name: "Noname"
        },
        shouldShowEditList: false,
        beingEditedItem: -1
    };

    constructor(props) {
        super(props);
        this.refItems = {};
    }

    async componentDidMount() {
        this.setState({ data: (await db.get("data")) || this.state.data });
        console.warn("DATA", this.state.data);
    }

    render() {
        return (
            <div className="DataManager">
                <button className={"clear-all"} onClick={this.clearData}>
                    CLEAR All Data
                </button>

                <div>
                    <div className={"list-name"}>
                        {this.state.shouldShowEditList ? (
                            <div>
                                Update name:
                                <input
                                    defaultValue={this.state.data.name}
                                    onKeyUp={async e => {
                                        await this.updateData({ name: e.target.value });
                                    }}
                                />
                            </div>
                        ) : (
                            <h2>Name: {this.state.data.name}</h2>
                        )}
                        <button
                            onClick={() => {
                                this.setState({
                                    shouldShowEditList: !this.state.shouldShowEditList
                                });
                            }}
                        >
                            {this.state.shouldShowEditList ? "Done" : "Edit"}
                        </button>
                    </div>
                    <h4>Items</h4>
                    <ul>
                        {this.state.data.items.map((item, ind) => (
                            <TaskItem
                                item={item}
                                key={item.uid}
                                ind={ind}
                                onDeleteClick={async () => {
                                    await this.deleteItem(ind);
                                }}
                            />
                        ))}
                    </ul>
                    <div>
                        <h2>Add</h2>
                        <form
                            onSubmit={async e => {
                                e.preventDefault();
                                await this.addItem();
                            }}
                        >
                            <input type="text" ref={ref => (this.ref = ref)} />
                            <button type="submit">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    addItem = async () => {
        this.state.data.items.push({ title: this.ref.value, uid: Date.now() });
        this.ref.value = "";
        await this.updateData({ items: this.state.data.items });
    };

    deleteItem = async ind => {
        this.state.data.items.splice(ind, 1);
        await this.updateData({
            items: this.state.data.items
        });
    };

    updateData = async newData => {
        await db.update("data", newData);
        this.setState({ data: (await db.get("data")) || this.state.data });
    };

    clearData = async () => {
        await db.remove("data");
        await db.add("data", { items: [], name: "Noname" });
        window.location.reload();
    };
}

export default hot(DataManager);
