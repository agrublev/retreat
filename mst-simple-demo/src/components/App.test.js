import React from "react";
import ReactDOM from "react-dom";
import { initData } from "../utils";
import App from "./App";
import Store from "../stores/Store";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App store={Store.create(initData)}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
