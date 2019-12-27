/**
 * entry
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "@utils/rem";
import eruda from "eruda";

// analytics
// import { analytics, timing } from "@utils/analytics";

import FastClick from "fastclick";
FastClick.attach(document.body);

if (process.env.NODE_ENV !== "production" && !location.hostname.includes("192")) {
  const el = document.createElement("div");
  document.body.appendChild(el);
  eruda.init({
    container: el,
    useShadowDom: false,
    autoScale: true
  });
}

ReactDOM.render(<App />, document.getElementById("root"));
