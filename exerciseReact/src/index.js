import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import App from "./AppEvents.js";
// import App from "./AppStateless.js";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
    module.hot.accept(); // already had this init code

    module.hot.addStatusHandler(status => {
        if (status === "prepare") console.clear();
    });
}
