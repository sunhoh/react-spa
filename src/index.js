import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

const container = document.getElementById("root");
const initialData = window.__INITIAL_DATA__;

ReactDOM.hydrateRoot(container, <App state={initialData} />);
