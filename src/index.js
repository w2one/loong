/**
 * entry
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "@utils/rem";

// analytics
// import { analytics, timing } from "@utils/analytics";

import FastClick from "fastclick";
FastClick.attach(document.body);

if (process.env.NODE_ENV !== "production" && !location.hostname.includes("192")) {
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
