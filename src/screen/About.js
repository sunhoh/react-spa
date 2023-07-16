import React from "react";
import useRouter from "../hook/useRouter.js";

const About = () => {
  const { push } = useRouter();

  return (
    <div>
      <h1>Hello About</h1>
      <button onClick={() => push("/")}>Home</button>
    </div>
  );
};

export default About;
