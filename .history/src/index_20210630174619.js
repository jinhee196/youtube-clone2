import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

const youtube = new Youtube("sfd");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
