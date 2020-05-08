//import "./style/style.css";
import create from "./components/createDiv";
//const Hendalf = require("./classes/classes");
(() => {
  const el = create();
  document.body.appendChild(el);
  const div = document.querySelector("div");

  console.log("-> a", div);
})();

/* const hendalf = new Hendalf(33, "Вася!");
hendalf.sayName();
hendalf.sayKind();
const el = create();
document.body.appendChild(el);
const div = document.querySelector("div");

console.log("-> a", div);
 */
/* import React from "react";
import ReactDOM from "react-dom";
import { MyComponent } from "./react-components";
import Hendalf from "./classes/classes";
ReactDOM.render(<MyComponent />, document.getElementById("app")); */

const hendalf = new Hendalf(33, "frodo");
hendalf.sayName();
