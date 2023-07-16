import React from "react";

import Home from "./screen/Home.js";
import About from "./screen/About.js";

import Router from "./components/Router.js";
import Route from "./components/Route.js";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

export default function App() {
  return (
    <Router>
      {routes.map(({ path, component: Component }) => {
        return <Route key={path} path={path} component={<Component />} />;
      })}
    </Router>
  );
}
