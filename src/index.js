import App from './App';
import stylesheet from "./styles/index.scss";
import React from "react";
import ReactDOM from "react-dom";

function buildCSS(chunk) {
   let css = chunk.toString();
   for (const key in chunk.locals) {
       css = css.replace(new RegExp(chunk.locals[key], "g"), key);
   }
   return css;
}

document.head.appendChild(Object.assign(document.createElement("style"), {
   id: "main-style",
   innerHTML: "\n" + buildCSS(stylesheet) + "\n"
}));

ReactDOM.render(<App />, document.getElementById("app"));