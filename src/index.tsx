import React from "react";
import ReactDOM from "react-dom";
import Format2Json2View from "./Format2Json2View";
import * as serviceWorker from "./serviceWorker";
import { testJsonString } from "./mock";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Format2Json2View source={testJsonString} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
