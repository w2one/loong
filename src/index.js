/**
 * entry
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "@utils/rem";
import "moment";

moment().format("MMMM Do YYYY, h:mm:ss a");

// analytics
// import { analytics, timing } from "@utils/analytics";

import FastClick from "fastclick";
import moment from "moment";
FastClick.attach(document.body);

if (process.env.NODE_ENV !== "production") {
  const eruda = require("eruda");
  const el = document.createElement("div");
  document.body.appendChild(el);
  eruda.init({
    container: el,
    // tool: ["console", "elements"],
    useShadowDom: true,
    autoScale: true
  });
}

ReactDOM.render(<App />, document.getElementById("root"));
