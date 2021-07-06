import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Youtube from "./youtube";

const youtube = new Youtube();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
