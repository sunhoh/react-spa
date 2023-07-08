import { createContext } from "react";

const RouterContext = createContext({
  currentPath: "",
  changePath: () => {},
});

export default RouterContext;
