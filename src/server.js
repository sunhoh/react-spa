import React from "react";
import ReactDOM from "react-dom/server";
import express from "express";
import fs from "fs";
import path from "path";
import App from "./App.js";

const app = express();
app.use("/dist", express.static("dist"));

app.get("*", (req, res) => {
  let indexHTML = fs.readFileSync(
    path.resolve(__dirname, "../dist/index.html"),
    "utf8"
  );

  const result = ReactDOM.renderToString(<App />);
  const initialData = { name: "ssr" };

  indexHTML = indexHTML
    .replace('<div id="root"></div>', `<div id="root">${result}</div>`)
    .replace("__DATA_FROM_SERVER__", JSON.stringify(initialData)); // head script에 server 측 주입

  return res.status(200).send(indexHTML);
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
