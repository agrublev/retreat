import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

class Angel extends Component {
    state = { on: false };
    @observable nonState = 52 + "loves";
    nonObservedState = "11";

    componentDidUpdate(prevProps, prevState) {
        console.warn("-- Console DD UPDATE");
    }

    changeNonState = () => {
        this.nonState = 11 + Date.now();
    };

    changeNonObservableState = () => {
        this.nonObservedState = 52 + Date.now();
    };

    render() {
        console.warn("-- Console Render", 52);
        return (
            <div>
                <div>
                    mobx non state: {this.nonState}
                    <div>
                        <button onClick={this.changeNonState}>CHANGE</button>
                    </div>
                </div>
                <div>
                    mobx nonObservable state: {this.nonObservedState}
                    <div>
                        <button onClick={this.changeNonObservableState}>CHANGE</button>
                    </div>
                </div>
                {this.state.on ? <span>ONNNNNNNNNNN</span> : <span>FFFFFF</span>}
                {this.props.yes === "maybe" && <div>INITIAL RENDER</div>}
            </div>
        );
    }
}

export default observer(Angel);
