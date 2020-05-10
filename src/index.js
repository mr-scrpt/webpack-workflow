import React from "react";
import ReactDOM from "react-dom";
import { MyComponent } from "./react-components";
import Hendalf from "./classes/classes";
ReactDOM.render(<MyComponent />, document.getElementById("app"));

const hendalf = new Hendalf(33, "frodo");
hendalf.sayName();
