import { useContext } from "react";
import RouterContext from "../context/RouterContext.js";

const Route = ({ path, component }) => {
  const { currentPath } = useContext(RouterContext);

  if (currentPath === path) return component;
  return null;
};

export default Route;
