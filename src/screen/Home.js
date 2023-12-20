import React from "react";
import useRouter from "../hook/useRouter.js";

const Home = (state) => {
  const { push } = useRouter();

  return (
    <div>
      <h1>Hello Home</h1>
      <button onClick={() => push("/about")}>About</button>
    </div>
  );
};

export default Home;
