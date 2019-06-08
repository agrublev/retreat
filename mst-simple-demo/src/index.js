import "./index.css";
import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import { initData } from "./utils";
import App from "./components/App";
import Store from "./stores/Store";

render(
  <div>
    <App store={Store.create(initData)}/>
    <DevTools/>
  </div>,
  document.getElementById("root")
);
