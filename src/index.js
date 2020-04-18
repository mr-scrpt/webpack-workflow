import "./style/style.css";
import create from "./components/createDiv";

/* (() => {
  const el = create();
  document.body.appendChild(el);
  const div = document.querySelector("div");

  console.log("-> a", div);
})();
 */

const el = create();
document.body.appendChild(el);
const div = document.querySelector("div");

console.log("-> a", div);
