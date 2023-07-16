import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

const initialData = window.__INITIAL_DATA__;
const container = document.getElementById("root");

ReactDOM.hydrateRoot(container, <App page={initialData} />);
