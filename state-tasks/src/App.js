import {hot} from "react-hot-loader/root";
import React from "react";
import "./App.less";
import {observer} from "mobx-react";
import DataManager from "./DataManager";

@observer
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<DataManager/>
			</div>
		);
	}
}

export default hot(App);
