import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement  ==> ReactElement JS-Object ==> HTMLElement(render)

const header = React.createElement(
    "h1",
    {id:"header"},
    "Namaste React!"
);

console.log(header);

//JSX (transpiled before it reaches the JS engine) - PARCEL - Babel

//JSX ==> React.creatElement ==> ReactElement JS-Object ==> HTMLElement(render)

const JSXHeader=<h1 id="header">Namaste React using JSX</h1>;

console.log(JSXHeader);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(JSXHeader);