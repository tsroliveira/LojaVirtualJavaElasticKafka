import "./styles/bootstrap-custom.css";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React from "react";
import { createRoot } from "react-dom/client";
//import ReactDOM from "react-dom";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { HashRouter as Router } from "react-router-dom";

library.add(fas, far, fab);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

//ReactDOM.render(
//  <React.StrictMode>
//    <Router>
//      <App />
//    </Router>
//  </React.StrictMode>,
//  document.getElementById("root")
//);