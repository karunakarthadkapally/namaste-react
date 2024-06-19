import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement  ==> Object ==> HTMLElement(render)

const header = React.createElement(
    "h1",
    {id:"header"},
    "Namaste React!"
);

console.log(header);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);