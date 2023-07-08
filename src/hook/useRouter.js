import { useContext } from "react";
import RouterContext from "../context/RouterContext.js";

const useRouter = () => {
  const { currentPath, changePath } = useContext(RouterContext);

  const push = (to) => {
    if (to === currentPath) return;
    changePath(to);
  };
  return { push };
};

export default useRouter;
