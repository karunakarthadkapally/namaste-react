import React from "react";
import ReactDOM from "react-dom/client";

//JSX (transpiled before it reaches the JS engine) - PARCEL - Babel

//JSX ==> React.creatElement ==> ReactElement JS-Object ==> HTMLElement(render)

const JSXHeader = <h1 id="header">Namaste React using JSX</h1>;

console.log(JSXHeader);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(JSXHeader);
