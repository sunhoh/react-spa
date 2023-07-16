import React from "react";
import RouterContext from "../context/RouterContext.js";

const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = React.useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  React.useEffect(() => {
    const handlePopStateEvent = (event) => {
      setCurrentPath(event.state?.path ?? "/");
    };
    window.addEventListener("popstate", handlePopStateEvent);

    return () => {
      window.removeEventListener("popstate", handlePopStateEvent);
    };
  }, []);

  const changePath = React.useCallback((path) => {
    window.history.pushState({ path }, "path", path);
    setCurrentPath(path);
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, changePath }}>
      <div>{children}</div>
    </RouterContext.Provider>
  );
};

export default Router;
