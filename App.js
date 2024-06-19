import React from "react";
import ReactDOM from "react-dom/client";

const JSXHeader = <h1 id="header">Namaste React using JSX</h1>;

const header = (
  <h1 className="header">Namaste React Using JSX with multiple line</h1>
);

console.log(JSXHeader);
console.log(header);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(JSXHeader);
