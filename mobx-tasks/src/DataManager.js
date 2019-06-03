import {hot} from "react-hot-loader/root";
import React from "react";
import "./App.less";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {db} from "../data/index.js"

@observer
class DataManager extends React.Component {
	@observable data = {items: [], name: "Noname"};
	@observable shouldShowEditList = false;
	@observable beingEditedItem = -1;
	refItems = {};

	async componentDidMount() {
		this.data = await db.get("data") || this.data;
		console.warn("DATA", this.data);
	}

	render() {
		return (
			<div className="DataManager">
				<button className={"clear-all"} onClick={this.clearData}>CLEAR All Data</button>

				<div>
					<div className={"list-name"}>
						{this.shouldShowEditList ?
							<div>Update name:
								<input defaultValue={this.data.name} onKeyUp={async (e) => {
									await this.updateData({name: e.target.value})
								}}/>
							</div> : <h2>Name: {this.data.name}</h2>}
						<button onClick={() => {this.shouldShowEditList = !this.shouldShowEditList}}>
							{this.shouldShowEditList ? "Done" : "Edit"}
						</button>
					</div>
					<h4>Items</h4>
					<ul>
						{this.data.items.map((item, ind) => <li key={item.uid} onDoubleClick={() => {
							this.beingEditedItem = ind;
						}}>
							{this.beingEditedItem !== ind ? <div>
								{item.title} -
								<button onClick={async () => {
									await this.deleteItem(ind)
								}}>
									X
								</button>
							</div> : <form onSubmit={async (e) => {
								e.preventDefault();
								await this.updateItem(ind);
							}}>
								<input type="text" ref={ref => this.refItems[ind] = ref}/>
								<button type="submit">Add</button>
							</form>}
						</li>)}
					</ul>
					<div>
						<h2>Add</h2>
						<form onSubmit={async (e) => {
							e.preventDefault();
							await this.addItem();
						}}>
							<input type="text" ref={ref => this.ref = ref}/>
							<button type="submit">Add</button>
						</form>
					</div>
				</div>
			</div>
		);
	}

	addItem = async () => {
		this.data.items.push({title: this.ref.value, uid: Date.now()});
		this.ref.value = "";
		await this.updateData({items: this.data.items});
	};

	deleteItem = async (ind) => {
		this.data.items.splice(ind, 1);
		await this.updateData({items: this.data.items});
	};

	updateData = async (newData) => {
		await db.update("data", newData);
		this.data = await db.get("data") || this.data;
	};

	clearData = async () => {
		await db.remove("data");
		await db.add("data", {items: [], name: "Noname"});
		window.location.reload();
	};
}

export default hot(DataManager);
