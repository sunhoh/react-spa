import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./screen/Home.jsx";
import About from "./screen/About.jsx";

import Router from "./components/Router.js";
import Route from "./components/Route.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Route path="/" component={<Home />} />
    <Route path="/about" component={<About />} />
  </Router>
);
